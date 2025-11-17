/* Q.1 Write a switch program that prints the day name for a number (1–7).
Hint:
Use: switch(day)
Add break after each case
Use default for invalid number */

let day = 3; // You can change this value to test different cases
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number";
}
console.log(dayName);

