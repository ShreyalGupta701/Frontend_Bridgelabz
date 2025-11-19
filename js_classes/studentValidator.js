// studentValidator.js

const form = document.getElementById("studentForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    validateField("name", /^[A-Za-z ]+$/);
    validateField("email", /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
    validateField("phone", /^[0-9]{10}$/);
    validateField("password", /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?])[A-Za-z\d@$!%*?]{6,}$/);
});

function validateField(id, regex) {
    const input = document.getElementById(id);
    const error = document.getElementById(id + "Error");

    if (regex.test(input.value)) {
        input.style.border = "2px solid green";
        error.innerText = "";
    } else {
        input.style.border = "2px solid red";
        error.innerText = "Invalid " + id;
    }
}
