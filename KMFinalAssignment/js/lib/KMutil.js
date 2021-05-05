function doValidate() {
    var form = $("#feedbackTextBox");
	
    form.validate({
        rules:{
            KMtxtName:{
                required: true,
                rangelength: [2,20]
            },
            KMemail:{
                required: true,
                emailcheck: true

            },
            KMtripdatestart:{
                required: true
				 
                
            },
            KMtxtPhone:{
                required: true,
				phone: true
                
            },
            KMtxtAddress:{
                required: true,
				rangelength: [2,20]
                
            },
            KMtxtCatName:{
                required: true,
				rangelength: [2,20]
                
            },
            KMtxtAge:{
                required: true,
				range: [0,30]
			},
            KMtripdatestart:{
                required: true
			},
            KMtxtTripLength:{
                required: true,
				range: [1,365]
			},
            KMtxtRooms:{
                required: true,
				range: [1,5]
			}
                
        },
        messages:{
            KMtxtName:{
                required: "You must provide a name",
                minlength:"Length must be 2-20 characters long"
            },
            KMemail:{
                required: "You must provide an email",
                checkemail: "Please enter a valid email address"
            },
			KMtxtPhone:{
                required: "You must provide a phone number",
                phone:"Phone number must be in valid format!"
            },
			KMtxtAddress:{
                required: "You must provide an address",
                minlength:"Length must be 2-20 characters long"
            },
			KMtxtCatName:{
                required: "You must provide a cat name",
                rangelength:"Length must be 2-20 characters long"
            },			
			KMtxtAge:{
                required: "You must provide a cat age",
                range:"Must be between 0-30 years old!"
            },
			KMtxtTripLength:{
                required: "You must provide a trip length",
                range:"Trip must be between 1-365 days!"
            },
			KMtxtRooms:{
                required: "You must provide room amount",
                range:"Trip must be between 1-5 rooms!"
            },
            KMtripdatestart:{
                required: "Reservation date is required"                
            }
        }
    });
    return form.valid();
}


function doValidate_OnEdit() {
    var form = $("#KMfeedbackTextBoxEdit");
    form.validate({
        rules:{
            KMtxtName2:{
                required: true,
                rangelength: [2,20]
            },
            KMemail2:{
                required: true,
                emailcheck: true

            },
            KMtxtPhone2:{
                required: true,
				phone: true
                
            },
            KMtxtAddress2:{
                required: true,
				rangelength: [2,20]
                
            },
            KMtxtCatName2:{
                required: true,
				rangelength: [2,20]
                
            },
            KMtxtAge2:{
                required: true,
				range: [0,30]
			},
            KMtripdatestart2:{
                required: true
			},
            KMtxtTripLength2:{
                required: true,
				range: [1,365]
			},
            KMtxtRooms2:{
                required: true,
				range: [1,5]
			}
                
        },
        messages:{
            KMtxtName2:{
                required: "You must provide a name",
                minlength:"Length must be 2-20 characters long"
            },
            KMemail2:{
                required: "You must provide an email",
                checkemail: "Please enter a valid email address"
            },
			KMtxtPhone2:{
                required: "You must provide a phone number",
                phone:"Phone number must be in valid format!"
            },
			KMtxtAddress2:{
                required: "You must provide an address",
                minlength:"Length must be 2-20 characters long"
            },
			KMtxtCatName2:{
                required: "You must provide a cat name",
                rangelength:"Length must be 2-20 characters long"
            },			
			KMtxtAge2:{
                required: "You must provide a cat age",
                range:"Must be between 0-30 years old!"
            },
			KMtxtTripLength2:{
                required: "You must provide a trip length",
                range:"Trip must be between 1-365 days!"
            },
			KMtxtRooms2:{
                required: "You must provide room amount",
                range:"Trip must be between 1-5 rooms!"
            },
            KMtripdatestart2:{
                required: "Reservation date is required"                
            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod("emailcheck",
    function (value, element) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return this.optional(element) || regex.test(value);
    },
    "Please enter a valid email!");
	
	
jQuery.validator.addMethod("phone", function(phone_number, element) {
  phone_number = phone_number.replace(/\s+/g, ""); 
  return this.optional(element) || phone_number.length > 9 &&
  phone_number.match(/^(1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/);
}, "Please specify a valid phone number");
	

