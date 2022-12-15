<?php


namespace Fizdalf;


class AdminNotifier {
	private $notifications = [];

	/**
	 * AdminNotifier constructor.
	 */
	public function __construct() { }

	public function sendNotification( $notificationID, $body, $success = true ) {
		$this->notifications[ $notificationID ] = [
			"body" => $body,
			"type" => $success
		];
	}

	public function execute() {
		foreach ( $this->notifications as $id => $notification ) {
			$class = $notification['type'] ? "notice-success" : 'notice-error';
			echo '<div class="notice ' . $class . '">' . $notification['body'] . '</div>';
			unset( $this->notifications[ $id ] );
		}
	}
}