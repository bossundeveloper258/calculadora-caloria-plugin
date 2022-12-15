<?php


namespace Fizdalf;

class Calculator
{

  /**
   * @var UserData
   */
  private $userData;
  private $carbsRatioChanged = false;

  public function __construct(UserData $userData)
  {
    $this->userData = $userData;
  }

  function getMealEnergyInfo(IMeal $meal, string $nutrient)
  {
    $protein = $this->getMealInfo($meal, 'protein');
    $carbohydrates = $this->getMealInfo($meal, 'carbohydrates');
    $fat = $this->getMealInfo($meal, 'fat');

    if (($fat + $carbohydrates + $protein) === 0) {
      return 0;
    }
    $numerator = null;
    switch ($nutrient) {
      case 'fat':
        $numerator = $fat * 9;
        break;
      case 'protein':
        $numerator = $protein * 4;
        break;
      case 'carbohydrates':
        $numerator = $carbohydrates * 4;
        break;
    }

    return $numerator / ($protein * 4 + $carbohydrates * 4 + $fat * 9);
  }

  function getMealInfo(IMeal $meal, string $key)
  {
    return array_reduce($meal->productLines,
      function ($acc, $pl) use ($key) {
        $acc += $this->getProductLineInfo($pl, $key);

        return $acc;
      },
      0);
  }

  function getProductLineInfo(IProductLine $productLine, $productKey)
  {
    if (!$productLine->product) {
      return null;
    }

    return ($productLine->product->{$productKey} / $productLine->product->amount) * $productLine->amount;
  }

  function getMealRecommendedIntakePercent(UserData $userData, IMeal $meal, string $nutrient)
  {
    switch ($nutrient) {
      case 'kCalories':
        $totalCalories = $this->getGoalCalories($userData);

        return $this->getMealInfo($meal, $nutrient) / $totalCalories;
      case 'protein':
        $proteinGrams = $this->getProteinGrams($userData);

        return $this->getMealInfo($meal, $nutrient) / $proteinGrams;
      case 'carbohydrates':
        $carbohydrates = $this->getProteinGrams($userData);

        return $this->getMealInfo($meal, $nutrient) / $carbohydrates;
      case 'fat':
        $fat = $this->getProteinGrams($userData);

        return $this->getMealInfo($meal, $nutrient) / $fat;
      default:
        return 0;
    }
  }

  // los multiplicadores para mantenimiento / perder grasa / ganar musculatura
  function getGoalCalories(UserData $userData, $forcedGoal = null)
  {
    if (!$userData->bodyFat || !$userData->weight || !$userData->activityIndex || !$userData->goal) {
      return null;
    }
    $basalCalories = $this->getBasalCalories($userData);
    $maintenanceCalories = $userData->activityIndex * $basalCalories;
    $multiplier = null;
    $goal = +$userData->goal;
    if ($forcedGoal) {
      $goal = $forcedGoal;
    }
    switch ($goal) {
      case 1 :
        $multiplier = 1; // mantenimiento
        break;
      case 2:
        $multiplier = 1 - 0.15; // perder grasa
        break;
      case 3:
        $multiplier = 1 + 0.10; // ganar musculatura
    }

    return $maintenanceCalories * $multiplier;
  }

  function getBasalCalories($userData)
  {
    return 370 + (21.6 * $this->getLeanBodyMass($userData));
  }

  // masa corporal magra (kg)  (100-bodyFat) * weight / 100
  function getLeanBodyMass(UserData $userData)
  {
    if (!$userData->bodyFat || !$userData->weight) {
      return null;
    }

    return (100 - $userData->bodyFat) * ($userData->weight / 100);
  }

  // antes en libras y peso, ahora por bodymass (proteinRatio es lo introducido por el usuario)
  function getProteinGrams(UserData $userData)
  {

    $userLeanBodyMass = $this->getLeanBodyMass($userData);
    return $userLeanBodyMass ? $userLeanBodyMass * $userData->proteinRatio : 0;
  }

  function proteinKCal($userData)
  {
    return ($this->getProteinGrams($userData) * 4);
  }

  function fatKCal($userData)
  {
    return ($this->getFatGrams($userData) * 9);
  }

  function carbsKCal($userData)
  {
    return ($this->getCarbsGrams($userData) * 4);
  }

  // antes en libras y peso, ahora por masa corporal magra
  function getFatGrams(UserData $userData)
  {
    if ($this->carbsRatioChanged) {
      return ($this->getGoalCalories($userData) - ($this->getProteinGrams($userData) * 4) - ($this->getCarbsGrams($userData) * 4)) / 9;
    }
    $userLeanBodyMass = $this->getLeanBodyMass($userData);
    return $userLeanBodyMass ? $userLeanBodyMass * $userData->fatRatio : 0;
  }

  // antes en libras y peso, ahora por masa corporal magra
  function getCarbsGrams(UserData $userData)
  {
    if ($this->carbsRatioChanged) {
      $userLeanBodyMass = $this->getLeanBodyMass($userData);
      return $userLeanBodyMass ? $userLeanBodyMass * $userData->carbsRatio : 0;
    }

    return ($this->getGoalCalories($userData) - ($this->getProteinGrams($userData) * 4) - ($this->getFatGrams($userData) * 9)) / 4;
  }



  // índice de masa corporal
  function getBodyMassIndex(UserData $userData)
  {
    if (!$userData->weight || !$userData->height) {
      return null;
    }

    return 10000 * $userData->weight / ($userData->height * $userData->height);
  }

  // indice de masa corporal magra
  function getLeanBodyMassIndex(UserData $userData)
  {
    if (!$userData->bodyFat || !$userData->weight || !$userData->height) {
      return null;
    }
    return (10000 * $this->getLeanBodyMass($userData) / ($userData->height * $userData->height));
  }

  // libras, ahora kilos, ahora para masa corporal magra
  function getCarbsRatio(UserData $userData)
  {
    $userLeanBodyMass = $this->getLeanBodyMass($userData);
    return $userLeanBodyMass ? $this->getCarbsGrams($userData) / ($userLeanBodyMass) : null;
  }

  // libras, ahora kilos, luego para masa corporal magra
  function getProteinRatio(UserData $userData)
  {
    $userLeanBodyMass = $this->getLeanBodyMass($userData);
    return $userLeanBodyMass ? $this->getProteinGrams($userData) / ($userLeanBodyMass) : null;
  }

  // libras, ahora kilos, luego para masa corporal magra
  function getFatRatio(UserData $userData)
  {
    $userLeanBodyMass = $this->getLeanBodyMass($userData);
    return $userLeanBodyMass ? $this->getFatGrams($userData) / ($userLeanBodyMass) : null;
  }

//  function getDietInfo(Diet $diet, $key){
//      return '321';
//  }

}
