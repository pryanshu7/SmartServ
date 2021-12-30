function validate()
{
    var username=document.getElementById("username");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var password=document.getElementById("password");
    var pasfilter = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@]).{8,}$/;
    if(filter.test(username.value) && pasfilter.test(password.value)){
        alert("login sucessfull");
        return false;
    }

    else{
        alert("Login Failed")
    }

}