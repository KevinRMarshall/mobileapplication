var db;

function errorHandler(tx, error) {
    console.error("SQL error: " + tx + " (" + error.code + ") -- "
        + error.message );
}

var DB = {

    KMCreateDatabase: function () {

        var shortName = "KMFinalProject";
        var version = "1.0";
        var displayName= "DB for Final Project";
        var dbSize = 2 * 1024 * 1024;
        console.info("Creating database...");

        function dbCreateSuccess(){
            console.info("Success: Database creation successful");
        }
        db = openDatabase(shortName, version, displayName,
            dbSize, dbCreateSuccess);
    },
	//if issues arrise, swap type table to create first
    KMCreateTables: function(){
        function txFunction(tx){
            var sql = 
			"CREATE TABLE IF NOT EXISTS reservation( " +
			"id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
			"fullName VARCHAR(30) NOT NULL," +
			"typeId INTEGER NOT NULL," +
			"email VARCHAR(30)," +			
			"startDate DATE," +
			"gender VARCHAR(5)," +
			"age INTEGER," +
			"phone INTEGER," +
			"tripLength INTEGER," +
			"rooms INTEGER," +
			"catName TEXT," +
			"address TEXT," +

			"FOREIGN KEY(typeId) REFERENCES type(id));";	
            var options = [];
			
			var sqlDrop = "DROP TABLE IF EXISTS type;";
			var sql1 = "CREATE TABLE IF NOT EXISTS type( "
						+ "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
						+ "name VARCHAR(20) NOT NULL);";
						
			 var options1 = [];	
		

            function successCallback(){
                console.info("Success: Table created successfully");
            }
			
			tx.executeSql(sqlDrop, options1, successCallback, errorHandler);	
            tx.executeSql(sql, options, successCallback, errorHandler);
			tx.executeSql(sql1, options1, successCallback, errorHandler);
			tx.executeSql('INSERT INTO type (name) VALUES ("Scottish Fold")');
			tx.executeSql('INSERT INTO type (name) VALUES ("Persian")');
			tx.executeSql('INSERT INTO type (name) VALUES ("Siamese")');
			tx.executeSql('INSERT INTO type (name) VALUES ("Bombay")');
			tx.executeSql('INSERT INTO type (name) VALUES ("Other")');
        }
        function successTransaction(){
            console.info("Success: Transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction );
    },
    dropTables: function(){
        function txFunction(tx){
            var sql = "DROP TABLE IF EXISTS reservation;";
            var options = [];
			var sql1 = "DROP TABLE IF EXISTS type;";
            var options1 = [];

            function successCallback(){
                console.info("Success: Table dropped successfully");
            }
            tx.executeSql(sql, options, successCallback, errorHandler);
			tx.executeSql(sql1, options1, successCallback, errorHandler);
        }
        function successTransaction(){
            console.info("Success: Transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction );
    }
}
