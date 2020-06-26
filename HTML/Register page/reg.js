function GG()                                    
{ 
    var name = document.forms["RegForm"]["Name"];  
    var lname = document.forms["RegForm"]["LName"];               
    var email = document.forms["RegForm"]["EMail"];    
    var phone = document.forms["RegForm"]["phone"];
    var what = document.forms["RegForm"]["Board"];
    var what1 = document.forms["RegForm"]["School"];
    var what2 = document.forms["RegForm"]["Class"];
    var password1 = document.forms["RegForm"]["cp"];  
    var password = document.forms["RegForm"]["Password"];  
    var dob = document.forms["RegForm"]["DOB"];  
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
   if (lname.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
   
    if (dob.value == "")                               
    { 
        window.alert("Please enter your Date of Birth."); 
        address.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    if (reg.test(email.value)==false) {
            window.alert("Please enter a valid e-mail address."); 
            email.focus()
                       return true;}
   
   if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
   if (password.value!=password1.value)                        
    { 
        window.alert("Password Mismatch try confirming again"); 
        password.focus(); 
        return false; 
    }
  if (what.selectedIndex < 1)                  
    { 
        alert("Please select a Board."); 
        what.focus(); 
        return false; 
    } 
   if (what1.selectedIndex < 1)                  
    { 
        alert("Please select a School."); 
        what.focus(); 
        return false; 
    } 
    if (what2.selectedIndex < 1)                  
    { 
        alert("Please select a Class."); 
        what.focus(); 
        return false; 
    } 
    return true; 
}