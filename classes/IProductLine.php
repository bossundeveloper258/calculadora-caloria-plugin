<?php


namespace Fizdalf;


class IProductLine {
	/** @var IProduct */
	public $product;
	/** @var float */
	public $amount;
	/** @var integer */
	public $id;
	/** @var string */
	public $createdAt;

	public static function create( $productLineDB ) {
		$instance            = new IProductLine();
		$instance->id        = + $productLineDB->id;
		$instance->amount    = + $productLineDB->amount;
		$instance->createdAt = $productLineDB->createdAt;

		return $instance;
	}
}