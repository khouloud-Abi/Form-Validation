function alert_error()
{
   var name=document.getElementById("firstname").value;
   var lastname=document.getElementById("lastname").value;
   var adress=document.getElementById("adress").value;
   var email=document.getElementById("email").value;
   var password=document.getElementById("password").value;
   var comment=document.getElementById("comments").value;
   var validmail = /^([a-zA-Z0-9_\.\-])+\@(([a-z\-])+\.)+([a-z]{2,3})+$/;
   var validpass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
   console.log(name, lastname, adress, email, password, comment)

   if ((name=="") || (lastname=="")|| (adress=="") || (email=="") || (password=="") || (comment==""))
    { alert("All fields are required !!");}

    else if (!validmail.test(email))
   {alert(" Email is not valid!! ");}
   
   else if(!validpass.test(password))
   {alert("The password has less than 8 characters or must be a combination of charatacters,numbers and at least a capital letter!!!");}

   else
   alert("Welcome, all the information are saved");
}