<?php

namespace Fizdalf;

use Error;
use wpdb;

class DBManager
{

  private $wpdb;
  /**
   * @var string
   */
  private $productsTableName;
  /**
   * @var string
   */
  private $dbVersion;
  /**
   * @var string
   */
  private $userDataTableName;
  /**
   * @var string
   */
  private $dietaryDayTableName;
  /**
   * @var string
   */
  private $dietMealTableName;
  /**
   * @var string
   */
  private $mealProductTableName;
  /**
   * @var AdminNotifier
   */
  private $adminNotifier;

  public function __construct(wpdb $wpdb, $currentVersion, AdminNotifier $adminNotifier)
  {
    $this->wpdb = $wpdb;
    $this->dbVersion = $currentVersion;
    $this->productsTableName = $wpdb->prefix . 'cc_products';
    $this->userDataTableName = $wpdb->prefix . 'cc_user_data';
    $this->dietaryDayTableName = $wpdb->prefix . 'cc_dietary_day';
    $this->dietMealTableName = $wpdb->prefix . 'cc_diet_meal';
    $this->mealProductTableName = $wpdb->prefix . 'cc_meal_product';
    $this->adminNotifier = $adminNotifier;
    // new table
    $this->customerFoodsTablename = $wpdb->prefix . 'cca_customer_foods';
  }

  public function uninstall()
  {
    $this->dropDB();
    delete_option('calculadora_caloria_plugin_version');
  }

  public function dropDB()
  {
    $tables = [
      $this->productsTableName,
      $this->userDataTableName,
      $this->dietaryDayTableName,
      $this->dietMealTableName,
      $this->mealProductTableName,
    ];
    foreach ($tables as $table) {
      $this->wpdb->query("drop table $table");
    }
  }

  public function activation()
  {
    $version = get_option('calculadora_caloria_plugin_version');

    if (!$version) {
      $this->adminNotifier->sendNotification(uniqid('calculadora_caloria', true), "Creando base de datos");
      $this->createDB();
      $this->insertData();
      update_option('calculadora_caloria_plugin_version', '0.0.1');
      $this->adminNotifier->sendNotification(uniqid('calculadora_caloria', true),
        "Base de datos Creada con éxito");
    }
    /// example code for updating DB in the future
    /// if ( version_compare( $version, '2.0' ) < 0 ) {
    //		$sql = "CREATE TABLE $table_name (
    //		  id mediumint(9) NOT NULL AUTO_INCREMENT,
    //		  time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
    //		  views smallint(5) NOT NULL,
    //		  clicks smallint(5) NOT NULL,
    //		  blog_id smallint(5) NOT NULL,
    //		  UNIQUE KEY id (id)
    //		) $charset_collate;";
    //		dbDelta( $sql );
    //
    //	  	update_option( 'my_plugin_version', '2.0' );
    //
    //	}

  }

  public function createDB()
  {
    $charset_collate = $this->wpdb->get_charset_collate();

    $productsTableQuery = "CREATE TABLE {$this->productsTableName} (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		description text NOT NULL,
		amount smallint(5) NOT NULL,
		unit varchar(10) NOT NULL,
		kCalories decimal(10,2),
		protein decimal(10,1),
		carbohydrates decimal(10,1),
		fat decimal(10,1),
		vitA decimal(10,1),
		vitB1 decimal(10,1),
		vitB2 decimal(10,1),
		vitB3 decimal(10,1),
		vitB5 decimal(10,1),
		vitB6 decimal(10,1),
		vitB9 decimal(10,1),
		vitB12 decimal(10,1),
		vitC decimal(10,1),
		vitD decimal(10,1),
		vitE decimal(10,1),
		vitK decimal(10,1),
		choline decimal(10,1),
		calcium decimal(10,1),
		copper decimal(10,1),
		iron decimal(10,1),
		magnesium decimal(10,1),
		manganese decimal(10,1),
		phosphorus decimal(10,1),
		potassium decimal(10,1),
		selenium decimal(10,1),
		sodium decimal(10,1),
		zinc decimal(10,1),
		water decimal(10,1),
		fiber decimal(10,1),
		cholesterol decimal(10,1),
		saturatedFat decimal(10,1),
		monoUnsaturatedFat decimal(10,1),
		polyUnsaturatedFat decimal(10,1),
		glycemicIndex decimal(10,1),
		comments text,
		UNIQUE KEY id (id)
	) $charset_collate;";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($productsTableQuery);

    $userDataTableQuery = "CREATE TABLE {$this->userDataTableName} (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		name text,
		userId bigint(11) not null,
		gender tinyint not null,
		age int(3) not null,
		weight int(3) not null,
		height int(3) not null,
		activityIndex decimal(4,3) not null,
		bodyFat decimal(4,2),
		goal int(1),
		proteinRatio decimal(3,2),
		carbsRatio decimal(3,2),
		fatRatio decimal(3,2),
		UNIQUE KEY id (id)
	) $charset_collate;";
    dbDelta($userDataTableQuery);

    $dietaryDayQuery = "CREATE TABLE {$this->dietaryDayTableName} (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		date date NOT NULL,
		userId bigint(11) not null,
		UNIQUE KEY id (id)
	) $charset_collate;";
    dbDelta($dietaryDayQuery);

    $dietMealQuery = "CREATE TABLE {$this->dietMealTableName} (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		dietDayId mediumint(9) NOT NULL,
		description text not null,
		createdAt datetime,
		UNIQUE KEY id (id)
	) $charset_collate;";

    dbDelta($dietMealQuery);

    $mealProductTableQuery = "CREATE TABLE {$this->mealProductTableName} (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		mealId mediumint(9) NOT NULL,
		productId mediumint(9),
		amount mediumint(9) not null,
		createdAt datetime,
		UNIQUE KEY id (id)
	) $charset_collate;";

    dbDelta($mealProductTableQuery);
    add_option('calculadora_caloría_db_version', $this->dbVersion);
  }

  public function insertData()
  {
    if (($h = fopen(plugin_dir_path(__FILE__) . '/../productos.csv', "r")) !== false) {
      $table = $this->wpdb->prefix . 'cc_products';
      $this->wpdb->query("TRUNCATE TABLE $table");
      // Convert each line into the local $data variable
      while (($data = fgetcsv($h, 1000, ",")) !== false) {
        $this->wpdb->insert(
          $table,
          [
            "description" => $data[0],
            "amount" => $data[1],
            "unit" => $data[2],
            "kCalories" => $data[3],
            "protein" => $data[4],
            "carbohydrates" => $data[5],
            "fat" => $data[6],
            "vitA" => $data[7],
            "vitB1" => $data[8],
            "vitB2" => $data[9],
            "vitB3" => $data[10],
            "vitB5" => $data[11],
            "vitB6" => $data[12],
            "vitB9" => $data[13],
            "vitB12" => $data[14],
            "vitC" => $data[15],
            "vitD" => $data[16],
            "vitE" => $data[17],
            "vitK" => $data[18],
            "choline" => $data[19],
            "calcium" => $data[20],
            "copper" => $data[21],
            "iron" => $data[22],
            "magnesium" => $data[23],
            "manganese" => $data[24],
            "phosphorus" => $data[25],
            "potassium" => $data[26],
            "selenium" => $data[27],
            "sodium" => $data[28],
            "zinc" => $data[29],
            "water" => $data[30],
            "fiber" => $data[31],
            "cholesterol" => $data[32],
            "saturatedFat" => $data[33],
            "monoUnsaturatedFat" => $data[34],
            "polyUnsaturatedFat" => $data[35],
            "glycemicIndex" => $data[36],
            "comments" => $data[37],
          ]
        );
      }

      // Close the file
      fclose($h);
    } else {
      echo __DIR__;
      echo 'failed to open file';
    }
  }

  public function getCurrentUserData()
  {
    $user = wp_get_current_user();
    $sql = $this->wpdb->prepare(
      "select * from {$this->userDataTableName} where userId = %d",
      [get_current_user_id()]
    );
    $row = $this->wpdb->get_row($sql, 'ARRAY_A');
    $row['displayName'] = $user->display_name;
    if (!$this->wpdb->num_rows) {
      $row['proteinRatio'] = 2;
      $row['fatRatio'] = 1;
      $row['carbsRatio'] = 2;
      $row['goal'] = 1;
    }

    return UserData::create((object)$row);
  }

  public function getDiet($dietId)
  {
    $userId = get_current_user_id();
    if (!isset($dietId)) {
      throw new Error('date is required');
    }
    $sql = $this->wpdb->prepare("select * from {$this->dietaryDayTableName} where userId = %d and id = %s ",
      [$userId, $dietId]);
    $dietDB = $this->wpdb->get_row($sql);
    if (!$dietDB) {
      return null;
    }
    $diet = Diet::create((object)$dietDB);
    $diet->meals = $this->getMealsForDiet($diet->id);

    return $diet;
  }

  public function getMealsForDiet($dietId)
  {
    $sql = $this->wpdb->prepare("select * from  {$this->dietMealTableName} where dietDayId = %d",
      [$dietId]
    );
    $meals = $this->wpdb->get_results($sql);
    if (!$meals || !count($meals)) {
      return [];
    }

    return array_map(
      function ($mealDB) {
        $meal = IMeal::create((object)$mealDB);
        $meal->productLines = $this->getProductLinesForMeal($meal->id);

        return $meal;
      },
      $meals
    );
  }

  public function getProductLinesForMeal(string $id)
  {
    $sql = $this->wpdb->prepare("select * from  {$this->mealProductTableName} where mealId = %d",
      [$id]
    );
    $productLines = $this->wpdb->get_results($sql);
    if (!$productLines || !count($productLines)) {
      return [];
    }

    return array_map(
      function ($productLineDB) {
        $productLine = IProductLine::create((object)$productLineDB);
        $productLine->product = $this->getProduct($productLineDB->productId);

        return $productLine;
      },
      $productLines
    );
  }

  public function getProduct($id)
  {
    $sql = $this->wpdb->prepare("select * from  {$this->productsTableName} where id = %d",
      [$id]
    );
    $sqlCustomer = $this->wpdb->prepare("select * from  {$this->customerFoodsTablename} where id = %d",
      [$id]
    );

    // normal query
    $productDB = $this->wpdb->get_row($sql);
    if (!$productDB) {
      // secondary query
      $productDB = $this->wpdb->get_row($sqlCustomer);
      // if nothing is found then return null
      if (!$productDB) {
        return null;
      }
    }

    return IProduct::create((object)$productDB);
  }

  public function getDietsDate($month , $year)
  {
    $userId = get_current_user_id();
    if (!isset($month)) {
      throw new Error('month is required');
    }
    if (!isset($year)) {
      throw new Error('year is required');
    }

    $month_wpdb = $this->wpdb->prepare('AND MONTH(date) = %s ', $month); 
    $year_wpdb = $this->wpdb->prepare('AND YEAR(date) = %s ', $year); 

    $sql = $this->wpdb->prepare("SELECT * FROM {$this->dietaryDayTableName} where userId = %d ". $month_wpdb. $year_wpdb,
      [$userId]);

    $dietDB = $this->wpdb->get_results($sql);
    if (!$dietDB) {
      return null;
    }
    $dietDBList = array();
    foreach ($dietDB as $key => $_diet) {
      $diet = Diet::create((object)$_diet);
      $diet->meals = $this->getMealsForDiet($diet->id);
      $dietDBList[] = $diet;
    }
    

    return $dietDBList;
  }

  public function getDietForDate($date)
  {
    $userId = get_current_user_id();
    if (!isset($date)) {
      throw new Error('date is required');
    }
    $sql = $this->wpdb->prepare("select * from {$this->dietaryDayTableName} where userId = %d and date = %s ",
      [$userId, $date]);
    $dietDB = $this->wpdb->get_row($sql);
    if (!$dietDB) {
      return null;
    }
    $diet = Diet::create((object)$dietDB);
    $diet->meals = $this->getMealsForDiet($diet->id);

    return $diet;
  }

  public function saveDiet($diet)
  {
    error_log('save diet started');
    $userId = get_current_user_id();

    if (!isset($diet)) {
      throw new Error('Dieta no encontrada');
    }
    // try to find a diet for the same date
    $query = "select id from {$this->dietaryDayTableName} where date = %s and userId = %d";
    $preparedQuery = $this->wpdb->prepare($query, [$diet->date, $userId]);
    $dietRow = $this->wpdb->get_row($preparedQuery);
    if (!$dietRow) {
      // this is a new diet ..just create everything
      $this->wpdb->insert($this->dietaryDayTableName, ["date" => $diet->date, "userId" => $userId]);
      $diet->id = $this->wpdb->insert_id;
    }

    $query = $this->wpdb->prepare("select id from {$this->dietMealTableName} where dietDayId = %d ",
      [$diet->id]);
    $currentMeals = $this->wpdb->get_results($query);

    foreach ($diet->meals as $meal) {
      $foundMeal = current(
        array_filter($currentMeals,
          function ($item) use ($meal) {
            return $meal->id == $item->id;
          }
        )
      );
      if (!$foundMeal) {
        $this->wpdb->insert($this->dietMealTableName,
          [
            "dietDayId" => $diet->id,
            "description" => $meal->description,
            "createdAt" => $meal->createdAt
          ]);
        $meal->id = $this->wpdb->insert_id;
      } else {
        $currentMeals = array_filter(
          $currentMeals,
          function ($item) use ($meal) {
            return $meal->id != $item->id;
          }
        );
        $this->wpdb->update($this->dietMealTableName,
          ["description" => $meal->description],
          ["id" => $meal->id]
        );
      }

      $query = $this->wpdb->prepare(
        "select id from {$this->mealProductTableName} where mealId = %d ",
        [$meal->id]
      );
      $currentProductLines = $this->wpdb->get_results($query);
      foreach ($meal->productLines as $productLine) {
        $foundProductLine = current(
          array_filter($currentProductLines,
            function ($item) use ($productLine) {
              return $productLine->id == $item->id;
            }
          )
        );
        if (!$foundProductLine) {
          $this->wpdb->insert($this->mealProductTableName,
            [
              "mealId" => $meal->id,
              "productId" => $productLine->product ? $productLine->product->id : null,
              "amount" => $productLine->amount,
              "createdAt" => (new \DateTime())->format("Y-m-d H:i:s")
            ]);
          $productLine->id = $this->wpdb->insert_id;
        } else {
          $currentProductLines = array_filter(
            $currentProductLines,
            function ($item) use ($productLine) {
              return $productLine->id != $item->id;
            }
          );
          $this->wpdb->update($this->mealProductTableName,
            [
              "productId" => $productLine->product ? $productLine->product->id : null,
              "amount" => $productLine->amount
            ],
            ["id" => $productLine->id]);
        }
      }
      foreach ($currentProductLines as $toDeleteProductLine) {
        $this->wpdb->delete($this->mealProductTableName, ["id" => $toDeleteProductLine->id]);
      }

    }
    foreach ($currentMeals as $toDeleteMeal) {
      $this->wpdb->delete($this->dietMealTableName, ["id" => $toDeleteMeal->id]);
      $this->wpdb->delete($this->mealProductTableName, ["mealId" => $toDeleteMeal->id]);
    }
    error_log('save diet finished');
    error_log(json_encode($diet));

    return $diet->id;
  }

  public function saveUserData($userData)
  {
    $user = wp_get_current_user();
    $sql = $this->wpdb->prepare("select * from {$this->userDataTableName} where userId = %d",
      [get_current_user_id()]);
    $row = $this->wpdb->get_row($sql);

    if (!$row) {
      $result = $this->wpdb->insert(
        $this->userDataTableName,
        [
          "name" => $user->display_name,
          "userId" => get_current_user_id(),
          "gender" => @$userData['gender'],
          "age" => @$userData['age'],
          "weight" => @$userData['weight'],
          "height" => @$userData['height'],
          "activityIndex" => @$userData['activityIndex'],
          "bodyFat" => @$userData['bodyFat'],
          "goal" => @$userData['goal'],
          "proteinRatio" => @$userData['proteinRatio'],
          "carbsRatio" => @$userData['carbsRatio'],
          "fatRatio" => @$userData['fatRatio'],
        ],
        [
          '%s',
          '%d',
          '%s',
          '%d',
          '%f',
          '%f',
          '%f',
          '%f',
          '%d',
          '%f',
          '%f',
          '%f'
        ]
      );
      if (!$result) {
        throw new Error($this->wpdb->last_error);
      }
    } else {
      $this->wpdb->update(
        $this->userDataTableName,
        [
          "gender" => @$userData['gender'],
          "age" => @$userData['age'],
          "weight" => @$userData['weight'],
          "height" => @$userData['height'],
          "activityIndex" => @$userData['activityIndex'],
          "bodyFat" => @$userData['bodyFat'],
          "goal" => @$userData['goal'],
          "proteinRatio" => @$userData['proteinRatio'],
          "carbsRatio" => @$userData['carbsRatio'],
          "fatRatio" => @$userData['fatRatio'],
        ],
        ['userId' => get_current_user_id()],
        [
          '%s',
          '%d',
          '%f',
          '%f',
          '%f',
          '%f',
          '%d',
          '%f',
          '%f',
          '%f'
        ]
      );
    }
  }

}
