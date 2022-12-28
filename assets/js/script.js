var email = "silasvinicius.dev@gmail.com";
var senha = "123"

function validar_senha(){
    var login_email = document.getElementById("login_email").value;
    var login_senha = document.getElementById("login_senha").value;


    if(login_email === email && login_senha === senha){
        alert("Usuario conectado");
        document.location.href = "login.html"        
    } else{
        alert("Usuário e senha inválidos");
    }

}