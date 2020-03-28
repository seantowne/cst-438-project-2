// login.js (client side)

$(document).ready(function() {
    $("#loginButton").on("click", function(event){
        event.preventDefault();
        var username = $("#usernameInput").val();
        var password = $("#passwordInput").val();
        
        if ( username.length == 0 || password.length == 0 ){
            $("#loginSuccessFeedback").html("Please Fill All Fields");
            $("#loginSuccessFeedback").css("color", "red");
            return;
        }
        $.ajax({
           type: "POST",
           url: "/login",
           datatype: "json",
           data: { "username":username, "password":password, },
           success: function(data, status){
               //alert(data.success);
                if ( data.success ){
                    $("#loginSuccessFeedback").html("You have been logged in!");
                    $("#loginSuccessFeedback").css("color", "green");
                } 
                else{
                    $("#loginSuccessFeedback").html("Username doesn't exist or bad password :/");
                    $("#loginSuccessFeedback").css("color", "red");
                }
           },
           error: function(){
               console.log("error");
               alert('error');  
           }
        });
    });
});