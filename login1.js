function validate()
{
    var username=document.getElementById("username");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var password=document.getElementById("password").value;
    if(filter.test(username.value) && password=="SmartServTest@123"){
        alert("login sucessfull");
        return false;
    }

    else{
        alert("Login Failed")
    }

}