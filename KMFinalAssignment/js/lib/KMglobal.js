$(function () {
        $("#KMratings").click(function () {
            if ($(this).is(":checked")) {
                $("#showRatings").show();
            } else {
                $("#showRatings").hide();				
            }
        });
    });
	
	$(function () {
        $("#KMratingsEdit").click(function () {
            if ($(this).is(":checked")) {
                $("#showRatingsEdit").show();
            } else {
                $("#showRatingsEdit").hide();				
            }
        });
    });
	
	
function initDB(){
    console.info("Initilizing Database in initDB()");
    try {
        DB.KMCreateDatabase();
        if (db) {
            console.info("Creating tables...");
            //create tables
            DB.KMCreateTables();
        }
        else{
            console.error("Error: cannot create tables: Database not available!");
        }

    } catch (e) {
        console.error("Error: (Fatal) Error in initDB(). Can not proceed");
    }


}


function init() {
    console.info("DOM is ready");
    $("#KMbtnSave").on("click", KMbtnSave_click);
	$("#KMViewFeedbackPage").on("pageshow", KMViewFeedbackPage_show);	
	$("#KMEditFeedbackPage").on("pageshow", KMEditFeedbackPage_show);
	$("#KMbtnClearDatabase").on("click", KMbtnClearDatabase_click);
	$("#KMAddFeedbackPage").on("pageshow", KMAddFeedbackPage_show);
	
	$("#KMbtnDelete").on("click", KMbtnDelete_click);
	$("#KMbtnUpdate").on("click", KMbtnUpdate_click);
	

}

function KMbtnSave_click() {
    addReview();
}

function KMViewFeedbackPage_show() {
    showAllReviews();
}

function KMEditFeedbackPage_show() {
    showOneReview();	
	
}

function KMbtnClearDatabase_click() {
    clearDatabase();
}

function KMAddFeedbackPage_show() {
	showAllTypes();		
}

function KMbtnDelete_click(){
	
	deleteOneReview();
}

function KMbtnUpdate_click(){
	
	updateOneReview();
}

$(document).ready(function () {
    init();
    initDB();
});