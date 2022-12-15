<?php


namespace Fizdalf;


class IMeal {
	/** @var string */
	public $id;
	/** @var string */
	public $description;
	/** @var IProductLine[] */
	public $productLines = [];
	/** @var string */
	public $createdAt;

	/**
	 * @param $dbObject
	 *
	 * @return IMeal
	 */
	public static function create( $dbObject ) {
		$instance              = new IMeal();
		$instance->id          = + $dbObject->id;
		$instance->description = $dbObject->description;
		$instance->createdAt   = $dbObject->createdAt;

		return $instance;
	}

}