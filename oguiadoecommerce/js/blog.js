$(document).ready(function () {
    var d = new Date();
    console.log(d);

	$('#email').focusout(function(){
                $('#email').filter(function(){
                   var email=$('#email').val();
                   console.log(email);
              var emailReg = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            if( !emailReg.test( email ) ) {
                alert('Please enter valid email');
                } else {
                alert('Thank you for your valid email');
                }
                })
    });


     $(".post_1").click(function(){
     	console.log("oi");
     	window.open("b","_self")

     });

});