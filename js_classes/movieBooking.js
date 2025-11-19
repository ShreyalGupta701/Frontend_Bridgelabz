// movieBooking.js

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const seats = document.getElementById("seats").value;

    const isValidName = /^[A-Za-z ]+$/.test(name);
    const isValidEmail = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,4}$/.test(email);
    const isValidSeats = /^(10|[1-9])$/.test(seats);

    if (isValidName && isValidEmail && isValidSeats) {
        const booking = { name, email, seats };
        console.log("Ticket Confirmed:", booking);
    } else {
        console.log("Invalid input");
    }
});
