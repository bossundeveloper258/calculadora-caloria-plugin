<?php

namespace Fizdalf;

class UserData {
	public $userName;
	public $gender;
	public $age;
	public $weight;
	public $height;
	public $activityIndex;
	public $bodyFat;
	public $goal;
	public $proteinRatio;
	public $carbsRatio;
	public $fatRatio;

	static function create( $userDataObj ) {
		$instance                = new UserData();
		$instance->userName      = $userDataObj->displayName; // nombre
		$instance->gender        = @$userDataObj->gender; // género
		$instance->age           = + @$userDataObj->age; // edad
		$instance->weight        = + @$userDataObj->weight; // peso (kg)
		$instance->height        = + @$userDataObj->height; // altura (cm)
		$instance->activityIndex = + @$userDataObj->activityIndex; // índice de actividad
		$instance->bodyFat       = + @$userDataObj->bodyFat; // grasa corporal
		$instance->goal          = + @$userDataObj->goal; // el multiplicador mantenimiento / perder / ganar
		$instance->proteinRatio  = + @$userDataObj->proteinRatio; // ratio introducido
		$instance->carbsRatio    = + @$userDataObj->carbsRatio; // ratio introducido
		$instance->fatRatio      = + @$userDataObj->fatRatio; // ratio introducido

		return $instance;
	}
}
