function addReview() {
    //check validation
    if (doValidate()){
        console.info("Validated");
        //fetch all info from the form
        var fullName = $("#KMtxtName").val();
        var typeId = $("#lvAllType").val(); 
        var email = $("#KMemail").val();
        var startDate = $("#KMtripdatestart").val();			
		var tripLength = $("#KMtxtTripLength").val();
		var age = $("#KMtxtAge").val();
		var phone = $("#KMtxtPhone").val();
		var rooms = $("#KMtxtRooms").val();
		var catName = $("#KMtxtCatName").val();
		var address = $("#KMtxtAddress").val();
		var gender = $("#radMale1").prop("checked");				
		
        //if validation is successful save to db
        var options = [fullName, typeId, email, startDate, gender, age, phone, tripLength, rooms, catName, address];
        function callback(){
            alert("Record added successfully");
        }

        Reservation.KMinsert(options, callback);
    }
    else{
        console.error("validation failed");
    }
}


function showAllReviews() {
    var options = [];
    function callback(tx, results){
        var htmlCode = "";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows.item(i);
            console.info("id: " + row['id'] +
                            " fullName: " + row['fullName'] +
                            " email: " + row['email'] +
                            " phone: " + row['phone'] +
                            " address: " + row['address']+
							" catName: " + row['catName']+
							" startDate: " + row['startDate']
							

            );
			var totalCost = ((+row['tripLength']) + (+row['rooms'])) *50;
            htmlCode += "<li><a data-role='button' data-row-id="+ row['id'] + " href='#'>" +
                "<h1>Full Name: "+ row['fullName'] + "</h1>" +
                "<p>Email: "+ row['email'] + "</p>" +
                "<p>Phone Number: "+ row['phone'] + "</p>" +
                "<p>Address: "+ row['address'] + "</p>" +
				"<p>Cat Name: "+ row['catName'] + "</p>" +
				"<p>Start Date: "+ row['startDate'] + "</p>" +
				"<p>Total Cost: "+  "$" + totalCost + "</p>" +
                "</a></li>";
        }
        var lv = $("#lvAll");
        lv = lv.html(htmlCode);
        lv.listview("refresh");
        $("#lvAll a").on("click", clickHandler);
        function clickHandler() {
            var id = $(this).attr("data-row-id");
            localStorage.setItem("id", id);
            $(location).prop('href', '#KMEditFeedbackPage');
        }
    }

    Reservation.KMselectAll(options, callback);
}

function showOneReview() {    
    var id = localStorage.getItem("id");
    var options = [id];
    function callback(tx, results){
        var row = results.rows.item(0);
        console.info("id: " + row['id'] +
              " fullName: " + row['fullName'] +
              " email: " + row['email'] +
              " phone: " + row['phone'] +
              " address: " + row['address']+
			  " catName: " + row['catName']+
			  " typeId: " + row['typeId']		
        );

        $("#KMtxtName2").val(row['fullName']);
		$("#KMcomboBox").val(row['typeId']);
        $("#KMtxtPhone2").val(row['phone']);
        $("#KMemail2").val(row['email']);
		$("#KMtxtAddress2").val(row['address']);
		$("#KMtxtCatName2").val(row['catName']);
		//radio button
		if (row['gender'] =='true') {
            $("#radMale2").prop("checked", true);
        }
        else{
            $("#radFemale2").prop("checked", true);
        }
		$("#KMtxtAge2").val(row['age']);
		$("#KMtxtTripLength2").val(row['tripLength']);	
		$("#KMtripdatestart2").val(row['startDate']);
		$("#KMtxtRooms2").val(row['rooms']);
		var totalCost = ((+row['tripLength']) + (+row['rooms'])) *50;
		document.getElementById("KMcostofstay2").value = "$" +totalCost;
			
		//refresh radio button
		$("#KMfeedbackTextBoxEdit :radio").checkboxradio("refresh");
		var lvEdit = $("#KMcomboBox");        
        lvEdit.selectmenu("refresh");
    }

    Reservation.KMselect(options, callback);
}

function clearDatabase() {
    
    var result = confirm("Really want to clear database?");
    try {
        if (result) {
            DB.dropTables();
            alert("Database cleared");
        }
    } catch (e) {
        alert(e);
    }
}

function deleteOneReview() {    
    var id = localStorage.getItem("id");
    var options = [id];
    function callback(){
        console.info("Record deleted successfully");
    }
	alert("Reservation Deleted Successfully!");
    Reservation.KMdelete(options, callback);
    $(location).prop('href', '#KMViewFeedbackPage');
}


function updateOneReview() {   

 if (doValidate_OnEdit()){
		var id = localStorage.getItem("id");
		var fullName = $("#KMtxtName2").val();
        var typeId = $("#KMcomboBox").val(); 
        var email = $("#KMemail2").val();
        var startDate = $("#KMtripdatestart2").val();			
		var tripLength = $("#KMtxtTripLength2").val();
		var age = $("#KMtxtAge2").val();
		var phone = $("#KMtxtPhone2").val();
		var rooms = $("#KMtxtRooms2").val();
		var catName = $("#KMtxtCatName2").val();
		var address = $("#KMtxtAddress2").val();
		var gender = $("#radMale2").prop("checked");				
		
        //if validation is successful save to db
        var options = [fullName, typeId, email, startDate, gender, age, phone, tripLength, rooms, catName, address, id];
    function callback(){
        console.info("Record updated successfully");
    }
	alert("Reservation Updated Successfully!");
    Reservation.KMupdate(options, callback);
	$(location).prop('href', '#KMViewFeedbackPage');
}
}

function showAllTypes() {
    var options = [];
    function callback(tx, results){
        var htmlCode = "";

        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows.item(i);      
			
				htmlCode += "<option value=" + row['id'] + ">" + row['name'] + "</option>"; 
        }
        var lv = $("#lvAllType");		 
        lv = lv.html(htmlCode);
        lv.selectmenu("refresh");    
			
    }
	
    Type.KMselectAll(options, callback);
}





