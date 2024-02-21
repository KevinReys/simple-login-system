function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Aqui você pode adicionar sua lógica de autenticação
    // Por exemplo, verificar se o username e senha correspondem a um usuário válido

    if (username === "Kevin" && password === "123") {
        message.textContent = "Login successful!";
        message.style.color = "green";
        window.location.href = "home.html";
        
    } else {
        message.textContent = "Invalid username or password.";
        message.style.color = "red";
    }
}