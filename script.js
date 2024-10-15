document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Simple hardcoded credentials (for demonstration purposes)
    const validUsername = "user";
    const validPassword = "password";

    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        errorMessage.textContent = ""; // Clear any previous error message
        // Redirect to dashboard or another page
        window.location.href = "dashboard.html";
    } else {
        errorMessage.textContent = "Invalid username or password.";
    }
});

// Toggle password visibility
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", function() {
    // Toggle the type attribute
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    
    // Toggle the eye icon
    this.classList.toggle("fa-eye-slash");
});
