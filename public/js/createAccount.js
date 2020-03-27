// createAccount.js (client side)


$(document).ready(function() {
    $("#createAccountButton").on("click", function(event){
        
        event.preventDefault();
        var fullname = $("#fullnameInput").val();
        var username = $("#usernameInput").val();
        var password = $("#passwordInput").val();
        var passconf = $("#passwordConfirm").val();
        
        if ( password != passconf ){
            $("#createAccountSuccessFeedback").html("Passwords Do Not Match");
            $("#createAccountSuccessFeedback").css("color", "red");
            return;
        }
        
        $.ajax({
           type: "POST",
           url: "/createAccount",
           datatype: "json",
           data: { 
               "fullname":fullname,
               "username":username, 
               "password":password, 
               "passconf":passconf
           },
           success: function(data, status){
               //alert(data.success);
                if ( data.success ){
                    $("#createAccountSuccessFeedback").html("Your account was created");
                    $("#createAccountSuccessFeedback").css("color", "green");
                } 
                else{
                    $("#createAccountSuccessFeedback").html("Username taken");
                    $("#createAccountSuccessFeedback").css("color", "red");
                }
           },
           error: function(){
               console.log("error");
               alert('error');  
           }
        });
    });
});