function validateForm(username, email, password) {
    let isValid = true;
    const messages = [];

    if (username.length < 3) {
        isValid = false;
        messages.push("Name must be at least 3 characters long.");
    }

    if (!email.includes("@") || !email.includes(".")) {
        isValid = false;
        messages.push("Email is not valid.");
    }

    if (password.length < 8) {
        isValid = false;
        messages.push("Password must be at least 8 characters long.");
    }

    return { isValid, messages };
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    const userName = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const { isValid, messages } = validateForm(userName, email, password);
    
    const feedbackDiv = document.getElementById("form-feedback");
    
    feedbackDiv.style.display = "none"; 

    if (isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745";
    } else {
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545";
    }

    feedbackDiv.style.display = "block"; 
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    form.addEventListener("submit", handleFormSubmit);
});