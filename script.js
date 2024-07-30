function add(){
    var email=document.getElementById("gmail").value;
    var pass=document.getElementById("passw").value;
    let res=/^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z])/g;
    if(email.match(res)==null){
        alert("Enter valid mail");
    }
    if(email!="" && pass!=""){
        return true;
    }
    else{
        alert("please insert all fileds")

    }
    
}


