<?php


namespace Fizdalf;


class Diet {
	public $id;
	public $date;
	public $userId;
	/** @var IMeal[] */
	public $meals = [];

	/**
	 * @param $dietDB
	 *
	 * @return Diet
	 */
	public static function create( $dietDB ) {
		$instance         = new Diet();
		$instance->id     = +$dietDB->id;
		$instance->date   = $dietDB->date;
		$instance->userId = +$dietDB->userId;

		return $instance;
	}

	// added for Oswal
	public function getInfo($key){
	    $qty = 0;
        foreach($this->meals as $meal){
            $qty += $this->getProductLineInfo($meal->productLines, $key);
        }
        return $qty;
    }

    // get the product line info (qty consumed) by key
    public function getProductLineInfo($productLine, $key){
	    $qty = 0;
	    foreach ($productLine as $line){
	        if (isset($line->product->amount) &&
                $line->product->amount != 0
                && isset($line->product->$key)
                && $line->amount != 0){
	            $qty += ($line->product->$key / $line->product->amount) * $line->amount;
            }
        }
	    return $qty;
    }

    // get the total if kCal by meal
    public function getCaloriesByMeal($meal){
	    $qty = 0;
	    foreach($meal->productLines as $line){
            $qty += ($line->product->kCalories / $line->product->amount) * $line->amount;
        }
	    return $qty;
    }
}
