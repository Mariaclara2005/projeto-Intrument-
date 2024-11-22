const form = document.getElementById("passwordForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

// Adiciona evento ao formulário
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Previne o envio do formulário

    if (password.value === confirmPassword.value) {
        message.textContent = "As senhas coincidem!";
        message.className = "success";
        location.href = "../../pages/login/Login.html";
     
    } else {
        message.textContent = "As senhas não coincidem.";
        message.className = "error";
    }
});