<?php
/*
Plugin Name: Calculadora Caloria
Plugin URI: http://oswalcandela.com
Description: Éste es un plugin para una calculadora de calorías
Version: 1.1
Author: fizdalf, rev by Alcides
Author URI: http://oswalcandela.com
License: GPL2
*/
require_once __DIR__ . '/vendor/autoload.php';

use Dompdf\Dompdf;
use Fizdalf\DBManager;
use Twig\Environment;
use Twig\Loader\FilesystemLoader;

if ( ! defined( 'CALCULADORA_CALORIAS_VERSION' ) ) {
	define( 'CALCULADORA_CALORIA_VERSION', '0.0.1' );
}

if ( ! class_exists( 'CalculadoraCaloriasPlugin' ) ) {

	class CalculadoraCaloriasPlugin {
		static $instance = null;

		private $pluginURL;
		/**
		 * @var DBManager
		 */
		private $dbManager;
		/**
		 * @var \Fizdalf\AdminNotifier
		 */
		private $adminNotifier;

		private function __construct() {

			$this->pluginURL = plugins_url( '/', __FILE__ );
			global $wpdb;
			$this->adminNotifier = new \Fizdalf\AdminNotifier();
			$this->dbManager     = new DBManager( $wpdb, CALCULADORA_CALORIA_VERSION, $this->adminNotifier );
			// install/uninstall
			register_activation_hook( __FILE__, [ $this, 'install' ] );
			register_uninstall_hook( __FILE__, [ CalculadoraCaloriasPlugin::class, "uninstall" ] );

			//register plugin actions here
			add_action( 'admin_menu', [ $this, 'pluginMenuSetup' ] );

			add_action( 'wp_ajax_get_user_data', [ $this, 'getUserData' ] );
			add_action( 'wp_ajax_nopriv_get_user_data', [ $this, 'getUserData' ] );

			add_action( 'wp_ajax_save_user_data', [ $this, 'saveUserData' ] );
			add_action( 'wp_ajax_nopriv_save_user_data', [ $this, 'saveUserData' ] );

			add_action( 'wp_ajax_save_date_diet', [ $this, 'saveDateDiet' ] );
			add_action( 'wp_ajax_nopriv_save_date_diet', [ $this, 'saveDateDiet' ] );

			add_action( 'wp_ajax_get_date_diet', [ $this, 'getDateDiet' ] );
			add_action( 'wp_ajax_nopriv_get_date_diet', [ $this, 'getDateDiet' ] );

			add_action( 'wp_ajax_get_products', [ $this, 'getProducts' ] );
			add_action( 'wp_ajax_nopriv_get_products', [ $this, 'getProducts' ] );

			add_action( 'wp_ajax_get_pdf', [ $this, 'getPDF' ] );
			add_action( 'wp_ajax_nopriv_get_pdf', [ $this, 'getPDF' ] );

			add_action( 'wp_ajax_get_diets_date', [ $this, 'getDietsDate' ] );
			add_action( 'wp_ajax_nopriv_get_diets_date', [ $this, 'getDietsDate' ] );

			add_action( 'admin_notices', [ $this, 'executeAdminNotifier' ] );

			$this->registerShortCodes();
		}

		function executeAdminNotifier() {
			$this->adminNotifier->execute();
		}

		function getPDF() {
			try {
				$date = @$_REQUEST['date'];
				$diet = $this->dbManager->getDietForDate( $date );
				error_log( 'get pdf called' );
				error_log( json_encode( $diet ) );
				$twig = new Environment( new FilesystemLoader( 'templates', __DIR__ ) );

				if ( ! $diet ) {
					wp_send_json_error( [ "error" => "no se encontró ninguna dieta para la fecha" ] );
				}

				$domPDF   = new Dompdf();
				$userData = $this->dbManager->getCurrentUserData();
				$html     = $twig->render( 'dieta.html.twig',
										[
											"calculator" => new Fizdalf\Calculator( $userData ),
											"userData"   => $userData,
											"diet"       => $diet
										]
				);

				$domPDF->loadHtml( $html );
				$domPDF->render();
				$domPDF->stream( 'dietario-' . ( new DateTime() )->format( 'YmdHis' ) . ".pdf" );
				exit;
			} catch (\Throwable $th) {
				var_dump($th);
				exit;
			}
			
		}

		function getProducts() {
			global $wpdb;
			$table      = $wpdb->prefix . 'cc_products';
			$query      = "select * from $table ";
			$parameters = [];
			if ( isset( $_REQUEST['search'] ) ) {
				$query        .= " where description like %s ";
				$parameters[] = "%$_REQUEST[search]%";
			}

			$query .= " order by description asc limit 15";

			$preparedSQL = $wpdb->prepare( $query, $parameters );
			$data        = $wpdb->get_results( $preparedSQL );


			// user data
      global $cca_current_user_id;
      $table      = $wpdb->prefix . 'cca_customer_foods';
      $query      = "select * from $table ";
      $parameters = [];
      if ( isset( $_REQUEST['search'] ) ) {
        $query        .= " where description like %s and id_user = $cca_current_user_id";
        $parameters[] = "%$_REQUEST[search]%";
      }

      $query .= " order by description asc limit 5";
      $preparedSQL = $wpdb->prepare( $query, $parameters );
      $customer_data  = $wpdb->get_results( $preparedSQL );

      // The ordering says the user results must appear on top
			wp_send_json( array_merge($customer_data, $data) );
		}

		function getDateDiet() {
			if ( ! isset( $_REQUEST['date'] ) ) {
				wp_send_json_error( 'Date parameter is required' );
			}
			$diet = $this->dbManager->getDietForDate( $_REQUEST['date'] );
			if ( ! $diet ) {
				wp_send_json( null );
			}
			wp_send_json( $diet );
		}

		function getDietsDate(){
			if ( ! isset( $_REQUEST['month'] ) ) {
				wp_send_json_error( 'Month parameter is required' );
			}
			if ( ! isset( $_REQUEST['year'] ) ) {
				wp_send_json_error( 'Year parameter is required' );
			}
			$diet = $this->dbManager->getDietsDate( $_REQUEST['month'] , $_REQUEST['year']);
			if ( ! $diet ) {
				wp_send_json( null );
			}
			wp_send_json( $diet );
		}


		function saveDateDiet() {
			if ( ! isset( $_REQUEST['diet'] ) ) {
				wp_send_json_error( 'No diet to save' );

				return;
			}
			$fixedJSON = str_replace( '\"', '"', $_REQUEST['diet'] );
			$diet      = json_decode( $fixedJSON, false );
			if ( ! $diet ) {
				wp_send_json_error( 'Failed to parse JSON data' );
			}
			try {
				$dietID = $this->dbManager->saveDiet( $diet );
			} catch ( \Error $error ) {
				wp_send_json_error( $error->getMessage() );
				exit;
			}
			wp_send_json( [
				              "status" => "OK",
				              "dietId" => $dietID,
				              "diet"   => $this->dbManager->getDiet( $dietID )
			              ] );
		}

		function saveUserData() {
			$userData = $_POST['userData'];
			$this->dbManager->saveUserData( $userData );
			wp_send_json( [ "status" => "success" ] );
		}

		function getUserData() {
			wp_send_json( $this->dbManager->getCurrentUserData() );
		}

		public static function getInstance() {
			if ( ! self::$instance ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		function pluginMenuSetup() {
			add_menu_page(
				'Calculadora de Calorías',
				'Calculadora de Calorías',
				'manage_options',
				'calculadora-calorias-setup',
				[ $this, 'menuRender' ]
			);
		}


		public static function uninstall() {
			global $wpdb;
			$adminNotifier = new \Fizdalf\AdminNotifier();
			$dbManger      = new DBManager( $wpdb, CALCULADORA_CALORIA_VERSION, $adminNotifier );
			$dbManger->uninstall();

		}


		function install() {
			$this->dbManager->activation();
		}

		function registerShortCodes() {
			add_shortcode( 'calculadora-caloria', [ $this, 'renderCalculator' ] );
		}


		function renderCalculator() {
			if ( ! is_user_logged_in() ) {
				ob_start();
				echo 'Por favor, inicie sesión para ver la calculadora';

				return ob_get_clean();
			}

//			$bodyFatPhoto = plugin_dir_url( __FILE__ ) . 'images/body-fat.png';
//			$html         = file_get_contents( __DIR__ . '/angular/index.html' );
//			$html = str_replace( '$bodyFatPhoto', $bodyFatPhoto, $html );
			ob_start();
			echo '<iframe id="angularFrame" title="My Angular App" name="v20210613" frameBorder="0" src="' . ( $this->pluginURL . 'angularv20210614/index.html' ) . '" style="height:2048px;width:100%;">';

			return ob_get_clean();
		}

		function menuRender() {
			echo "[calculadora-caloria]";
		}

		/**
		 * ACTION Enqueue scripts
		 */
		function enqueue() {
		}

	}
}

return CalculadoraCaloriasPlugin::getInstance();
