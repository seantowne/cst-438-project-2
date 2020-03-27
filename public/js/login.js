// login.js (client side)

$(document).ready(function() {
    $("#loginButton").on("click", function(event){
        event.preventDefault();
        var username = $("#usernameInput").val();
        var password = $("#passwordInput").val();
        $.ajax({
           type: "POST",
           url: "/login/attempt",
           datatype: "json",
           data: { "username":username, "password":password, },
           success: function(data, status){
               alert(data.success);
                if ( data.success ){
                    $("#loginSuccessFeedback").html("You have been logged in!");
                    $("#loginSuccessFeedback").css("color", "text-success");
                } 
                else{
                    $("#loginSuccessFeedback").html("Username doesn't exist or bad password :/");
                    $("#loginSuccessFeedback").css("color", "text-danger");
                }
           },
           error: function(){
               console.log("error");
               alert('error');  
           }
        });
    });
});