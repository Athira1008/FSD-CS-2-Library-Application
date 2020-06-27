    let fname=document.getElementById("fname").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;
    let addr=document.getElementById("addr").value;
    let male=document.getElementById("male").value;
    let female=document.getElementById("female").value;
    let dob=document.getElementById("dob").value;
    let pass=document.getElementById("pass").value;
    let conpass=document.getElementById("conpass").value;
function checkEmpty(){
    if((fname.trim()=="")&&(email.trim()=="")&&(phone.trim()=="")&&(addr.trim()=="")&&(pass.trim()=="")&&(conpass.trim()=="")){
        // alert("please fill all the fields");
        document.getElementById("instr1").innerText="Please enter your name";
        document.getElementById("instr2").innerText="Please enter your email-id";
        document.getElementById("instr3").innerText="Please enter your phone number";
        document.getElementById("instr4").innerText="Please enter your address";
        document.getElementById("instr5").innerText="Please enter a password";
        document.getElementById("instr6").innerText="Please re-type password";
        return false;
    }
    else if(fname.trim()==""){
        // alert("error");
        document.getElementById("instr1").innerText="Please enter your name";
       return false;
    }
    else if(email.trim()==""){
        document.getElementById("instr2").innerText="Please enter your email-id";
        return false;
    }
    else if(phone.trim()==""){
        document.getElementById("instr3").innerText="Please enter your phone number";
        return false;
    }
    else if(addr.trim()==""){
        document.getElementById("instr4").innerText="Please enter your address";
        return false;
    }
    else if(pass.trim()==""){
        document.getElementById("instr5").innerText="Please enter a password";
        return false;
    }
    else if(conpass.trim()==""){
        document.getElementById("instr6").innerText="Please re-type password";
        return false;
    }
    else{
        return true;
    }
}