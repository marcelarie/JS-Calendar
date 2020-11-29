const date = new Date();
const actualYear = date.getFullYear();
const actualMonth = date.getMonth() + 1;
const monthsArray = {01: 'January', 02: 'February', 03: 'March', 04: 'April', 05: 'May', 06: 'June', 07: 'July', 08: 'August', 09: 'September', 10: 'October', 11: 'November', 12: 'December', }
const numberOfDaysMonth = new Date(actualYear, actualMonth + 1, 0).getDate();

// HTML Variables.
const htmlYear = document.getElementById('calendar__title__year');
const htmlMonth = document.getElementById('calendar__title__month');
const calendarDaysDiv = document.getElementById('calendar__days__number')

// Show the actual year on the month title.
function showActualTitle() {
    htmlYear.textContent = actualYear;
    htmlMonth.textContent = monthsArray[actualMonth];
}

// Print the days of the month on the body grid.
function printDaysMonth() {
    for (day = 1; day < numberOfDaysMonth; day++) {
        let dayDiv = document.createElement('div');
        dayDiv.classList.add('calendar__days__number')
        dayDiv.textContent = day;
        calendarDaysDiv.appendChild(dayDiv);
    }
}

window.onload = showActualTitle(); printDaysMonth();
