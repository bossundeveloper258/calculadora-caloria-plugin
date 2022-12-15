<?php


namespace Fizdalf;


class IProduct {
	/** @var float */
	public $id;
	/** @var string */
	public $description;
	/** @var float */
	public $amount;
	/** @var string */
	public $unit;
	/** @var float */
	public $kCalories;
	/** @var float */
	public $protein;
	/** @var float */
	public $carbohydrates;
	/** @var float */
	public $fat;
	/** @var float */
	public $vitA;
	/** @var float */
	public $vitB1;
	/** @var float */
	public $vitB2;
	/** @var float */
	public $vitB3;
	/** @var float */
	public $vitB5;
	/** @var float */
	public $vitB6;
	/** @var float */
	public $vitB9;
	/** @var float */
	public $vitB12;
	/** @var float */
	public $vitC;
	/** @var float */
	public $vitD;
	/** @var float */
	public $vitE;
	/** @var float */
	public $vitK;
	/** @var float */
	public $choline;
	/** @var float */
	public $calcium;
	/** @var float */
	public $copper;
	/** @var float */
	public $iron;
	/** @var float */
	public $magnesium;
	/** @var float */
	public $manganese;
	/** @var float */
	public $phosphorus;
	/** @var float */
	public $potassium;
	/** @var float */
	public $selenium;
	/** @var float */
	public $sodium;
	/** @var float */
	public $zinc;
	/** @var float */
	public $water;
	/** @var float */
	public $fiber;
	/** @var float */
	public $cholesterol;
	/** @var float */
	public $saturatedFat;
	/** @var float */
	public $monoUnsaturatedFat;
	/** @var float */
	public $polyUnsaturatedFat;
	/** @var float */
	public $glycemicIndex;
	/** @var string */
	public $comments;

	public static function create( $productDB ) {
		$instance                     = new IProduct();
		$instance->id                 = + $productDB->id;
		$instance->description        = $productDB->description;
		$instance->amount             = + $productDB->amount;
		$instance->unit               = $productDB->unit;
		$instance->kCalories          = + $productDB->kCalories;
		$instance->protein            = + $productDB->protein;
		$instance->carbohydrates      = + $productDB->carbohydrates;
		$instance->fat                = + $productDB->fat;
		$instance->vitA               = + $productDB->vitA;
		$instance->vitB1              = + $productDB->vitB1;
		$instance->vitB2              = + $productDB->vitB2;
		$instance->vitB3              = + $productDB->vitB3;
		$instance->vitB5              = + $productDB->vitB5;
		$instance->vitB6              = + $productDB->vitB6;
		$instance->vitB9              = + $productDB->vitB9;
		$instance->vitB12             = + $productDB->vitB12;
		$instance->vitC               = + $productDB->vitC;
		$instance->vitD               = + $productDB->vitD;
		$instance->vitE               = + $productDB->vitE;
		$instance->vitK               = + $productDB->vitK;
		$instance->choline            = + $productDB->choline;
		$instance->calcium            = + $productDB->calcium;
		$instance->copper             = + $productDB->copper;
		$instance->iron               = + $productDB->iron;
		$instance->magnesium          = + $productDB->magnesium;
		$instance->manganese          = + $productDB->manganese;
		$instance->phosphorus         = + $productDB->phosphorus;
		$instance->potassium          = + $productDB->potassium;
		$instance->selenium           = + $productDB->selenium;
		$instance->sodium             = + $productDB->sodium;
		$instance->zinc               = + $productDB->zinc;
		$instance->water              = + $productDB->water;
		$instance->fiber              = + $productDB->fiber;
		$instance->cholesterol        = + $productDB->cholesterol;
		$instance->saturatedFat       = + $productDB->saturatedFat;
		$instance->monoUnsaturatedFat = + $productDB->monoUnsaturatedFat;
		$instance->polyUnsaturatedFat = + $productDB->polyUnsaturatedFat;
		$instance->glycemicIndex      = + $productDB->glycemicIndex;
		$instance->comments           = $productDB->comments;

		return $instance;
	}
}