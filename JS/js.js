document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("input1").value.trim();
    let password = document.getElementById("input2").value.trim();
    let errorMessage = document.getElementById("error-message");

    if (email === "" || password === "") {
        errorMessage.textContent = "Por favor, completa ambos campos.";
        errorMessage.style.display = "block";
        return;
    }

    alert("Inicio de sesión exitoso");
});