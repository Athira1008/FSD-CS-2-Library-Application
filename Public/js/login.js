let usr=document.getElementById("usr");
let pswd=document.getElementById("pswd");

// to check any of the fields are empty
function checkEmpty(){
    if((usr.value.trim()=="")&&(pswd.value.trim()=="")){
        console.log("password field is empty");
        document.getElementById("alert").innerText="Email and Password cannot be empty"
        return false;
    }
    else if(usr.value.trim()==""){
        console.log("email field is empty");
        document.getElementById("alert").innerText="Email cannot be empty"
        return false;
    }
    else if(pswd.value.trim()==""){
        console.log("password field is empty");
        document.getElementById("alert").innerText="Password cannot be empty"
        return false;
    }
    else{
        //alert("Processing........");
        return true;
    }
}