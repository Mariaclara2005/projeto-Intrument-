
function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "maria.camposprofeta@gmail.com" && senha == "admin"){
        alert('Bem-Vindo!');
        location.href = "../../pages/tela inicial/Tela Inicial.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}