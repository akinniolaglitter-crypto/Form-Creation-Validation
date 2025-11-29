document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");

form.addEventListener("submit", () => {
    Event.preventDefault();
    const userName = document.getElementById("username");
    const Email = document.getElementById("email");
    const Password = document.getElementById("password");

    const username = userName.value().trim();
    const email = Email.value().trim();
    const password = Password.value().trim();

    const isValid = true;
    const messages = [];

    if (username.length < 3) {
        isValid = false;
        messages.push("Name is not valid!");
    }

    if (!email.includes("@") && !email.includes(".")){
        isValid = false;
        messages.push("Email is not valid!");
    }

    if (password.length < 8){
        isValid = false;
        messages.push("Password not long enough");
    }
    feedbackDiv.style.display = "block";
    if (isValid = true) {
        feedbackDiv.textContent = "Registration successful!"
        feedbackDiv.style.color = "#28a745";
    }
    if (isValid = false) {
        messages.join("<br>");
        feedbackDiv.innerHTML = messages;
        feedbackDiv.style.color = "#dc3545";
    }

})

})
