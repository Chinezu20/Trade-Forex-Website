function validation()
{
    var form = document.getElementById("form");
    var email = document.getElementById("email").value ;
    var form = document.getElementById("text");
    var pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

    
    if (email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#EB5757";
        document.getElementById("email").style.borderColor = "green";
        return true;
    }
    else
    {
     form.classList.remove("valid");
     form.classList.add("invalid");
     text.innerHTML = "Incorrect email type";
        text.style.color = "#EB5757";
        document.getElementById("email").style.borderColor = "red";
        return false;
    }   
  }


  






