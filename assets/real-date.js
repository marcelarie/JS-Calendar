const date = new Date();
const actualYear = date.getFullYear();
const actualMonth = date.getMonth();
const monthsArray = {01: 'January', 02: 'February', 03: 'March', 04: 'April', 05: 'May', 06: 'June', 07: 'July', 08: 'August', 09: 'September', 10: 'October', 11: 'November', 12: 'December', }
console.log(actualYear)

// HTML Variables.
const htmlYear = document.getElementById('calendar__title__year');
const htmlMonth = document.getElementById('calendar__title__month');

// Show the actual year on the month title.

function showActualTitle() {
    htmlYear.textContent = actualYear;
    htmlMonth.textContent = monthsArray[actualMonth];
}
