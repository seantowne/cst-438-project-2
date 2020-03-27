// search.js (client side)

$(document).ready(function() {
    $("#search").on("click", function(event){
        event.preventDefault();
        var query = $("#searchInput").val();
        alert(query);
        $.ajax({
           type: "GET",
           url: "/search",
           datatype: "json",
           data: { "query" : query, },
           success: function(data, status){
               alert(data.success);
                if ( data.success ){
                    
                } 
                else{
                    
                }
           },
           error: function(){
               console.log("error");
               alert('error');  
           }
        });
    });
});