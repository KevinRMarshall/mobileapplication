var Reservation = {
    KMinsert: function(options, callback){
        function txFunction(tx){
            var sql = "INSERT INTO reservation(fullName, typeId, email, startDate , gender, age, phone, tripLength, rooms, catName, address) values(?,?,?,?,?,?,?,?,?,?,?);";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction(){
            console.info("Success: Transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    KMselectAll: function(options, callback){
        function txFunction(tx){
            var sql = "SELECT * FROM reservation;";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction(){
            console.info("Success: Transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    KMselect: function(options, callback){
        function txFunction(tx){
            var sql = "SELECT * FROM reservation WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction(){
            console.info("Success: Transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    KMupdate: function(options, callback){
        function txFunction(tx){
            var sql = "UPDATE reservation SET fullName=?, typeId=?, email=?, startDate=?, gender=?, age=?, phone=?, tripLength=?, rooms=?, catName=?, address=? WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction(){
            console.info("Success: Transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    },
    KMdelete: function(options, callback){
        function txFunction(tx){
            var sql = "DELETE FROM reservation WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction(){
            console.info("Success: Transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};



var Type = {
    
    KMselectAll: function(options, callback){
        function txFunction(tx){
            var sql = "SELECT * FROM type;";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction(){
            console.info("Success: Transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
