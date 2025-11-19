// loginValidation.js

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const userRegex = /^.{5,}$/;
    const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?]).{8,}$/;

    if (!userRegex.test(username)) {
        console.log("Username must be at least 5 characters");
    } else if (!passRegex.test(password)) {
        console.log("Password must include uppercase, number, special char, 8+ chars");
    } else {
        console.log("Login Successful");
    }
});
