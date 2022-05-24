let ShowPassword = document.querySelector("#ShowPassword");
let password = document.querySelector("#password");
let Email = document.querySelector("#Email");
let signButton = document.getElementById("submitButton");
let FullName = document.getElementById("FullName");

ShowPassword.addEventListener("click",()=>{
    if(ShowPassword.checked){
        password.type = "text";
    }
    else{
        password.type = "password";
    }
})

function ButtonColor(){
    if(password.value !== "" && Email.value !==  "" && FullName.value !==  ""){
        signButton.style.background = "rgb(28, 123, 201)";
    }
    else{
        signButton.style.background = "rgb(175, 194, 211)";
    }


}

