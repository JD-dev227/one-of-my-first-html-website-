$( document ).ready(function() {

           $( ".cross" ).hide();
           $( ".menu" ).hide();
         $( ".hamburger" ).click(function() { 
             $( ".menu" ).slideToggle( "slow", function() {
               $( ".hamburger" ).hide();
                 $( ".cross" ).show();
           });
        });

        $( ".cross" ).click(function() {
           $( ".menu" ).slideToggle( "slow", function() {
           $( ".cross" ).hide();
           $( ".hamburger" ).show();
        });
    });
});

// slider function for the gallery page
$(document).ready(function(){
        var x = 0;
    // for next slide
        $('.btn-next').click(function(){

        x= (x<=300)?(x+100):0;
      $('figure').css('left', -x+'%');
        });


     // for prev slide
     $('.btn-prev').click(function(){

        x= (x>=100)?(x-100):400;
      $('figure').css('left', -x+'%');
    });
    });
// addtocart button function 
function Addtocart(){
    alert("Product Added to cart")
}
//info button
var a ; 
function gaara(){
    if (a==1)
    {
        document.getElementById("gaara").style.display="none";
        return a=0
    }
    else
        {
            document.getElementById("gaara").style.display="inline";
            return a=1
        }
}
var b ; 
function ninja(){
    if (b==1){
            document.getElementById("ninja").style.display="none";
            return b=0
        }
    else
        {
            document.getElementById("ninja").style.display="inline";
            return b=1
        }
}
var c; 
function Case(){
    if (c==1){
            document.getElementById("iphone").style.display="none";
            return c=0
        }
    else
        {
            document.getElementById("iphone").style.display="inline";
            return c=1
        }
}
var d; 
function keys(){
    if (d==1){
            document.getElementById("keys").style.display="none";
            return d=0
        }
    else
        {
            document.getElementById("keys").style.display="inline";
            return d=1
        }
}
var e; 
function Iphone(){
    if (e==1){
            document.getElementById("Iphone").style.display="none";
            return e=0
        }

    else
        {
            document.getElementById("Iphone").style.display="inline";
            return e=1
        }
}
var f; 
function wall(){
    if (f==1){
            document.getElementById("wall").style.display="none";
            return f=0
        }
    else
        {
            document.getElementById("wall").style.display="inline";
            return f=1
        }

}
//Validation function for form
$(document).ready(function(){
  $("#sendBtn").click(function() {
        var full_name = $("#fname").val();
        var eMail = $("#eMail").val();
        var cNum = $("#cNum").val();

        if (full_name == "") {
            $("#result").html(" Error ,Please try again and fill in the forms");
            $("#result").css("color","red");
        }
        else if (eMail == "") {    
            $("#result").html(" Error ,Please try again  and fill in the forms");
            $("#result").css("color","red");
        }
        else if (cNum == "") {
            $("#result").html("Error,Please try again and fill in the forms");
            $("#result").css("color","red");
        }

        else {
            $("#result").html("Thank you!");
            $("#result").css("color","green");
        }

        //stop the page from refreshing itself (due to submit)
        return false;

    });
});