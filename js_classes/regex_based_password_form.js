// Form usimg regex to validate password strength

const passwordForm = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const messageDiv = document.getElementById('message');
passwordForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const password = passwordInput.value;
    // Regex pattern for strong password: at least 8 characters, one uppercase, one lowercase, one number, one special character
    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (strongPasswordPattern.test(password)) {
        messageDiv.textContent = "Strong password!";
        messageDiv.style.color = "green";
    } else {
        messageDiv.textContent = "Weak password! Must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
        messageDiv.style.color = "red";
    }
});
