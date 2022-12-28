//E-mail e senha para validação
var email = "silasvinicius.dev@gmail.com";
var senha = "123"

//função para validar senha
function validar_senha(){
    //Aqui eu recebo os valores do ID
    var login_email = document.getElementById("login_email").value;
    var login_senha = document.getElementById("login_senha").value;

    //Condição para verificar se o e-mail e senha são validos
    if(login_email === email && login_senha === senha){
        /*caso esteje igual a página vai emitir um alerta e direcionar 
        para outra tela*/
        alert("Usuario conectado");        
        document.location.href = "login.html"        
    } else{
        /*Caso este erro ele vai emitir um alerta e vai alterar a
        propriedade do display, aparecendo o paragrafo e link para 
        alterar senha*/
        alert("Usuário e senha inválidos");
        document.getElementById("forget").style.display = "flex";
    }

}