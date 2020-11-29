const date = new Date();
const actualYear = date.getFullYear();
const actualMonth = date.getMonth() + 1;
const monthsArray = {01: 'January', 02: 'February', 03: 'March', 04: 'April', 05: 'May', 06: 'June', 07: 'July', 08: 'August', 09: 'September', 10: 'October', 11: 'November', 12: 'December', }
const numberOfDaysMonth = new Date(actualYear, actualMonth + 1, 0).getDate();
const firstDayOfMonth = new Date(actualYear, actualMonth - 1, 1);
const firstDayOfMonthNum = firstDayOfMonth.getDay();
const weekArray = {0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'}

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

// Print the days of the past/future month on the body grid.
function printDaysMonthPast(a) {
    for (i = 0; i < a; i++) {
        let dayDivPast = document.createElement('div');
        dayDivPast.classList.add('calendar__days__number__past')
        calendarDaysDiv.appendChild(dayDivPast)
    }
}

// Show start day of the month.
function startDayMonth() {
    switch (firstDayOfMonthNum) {
        case 1:
            printDaysMonthPast(1);
            break;
        case 2:
            printDaysMonthPast(2);
            break;
        case 3:
            printDaysMonthPast(3);
            break;
        case 4:
            printDaysMonthPast(4);
            break;
        case 5:
            printDaysMonthPast(5);
            break;
        case 6:
            printDaysMonthPast(6);
            break;
    }
}
//              1*                 2*               3*    
window.onload = showActualTitle(); startDayMonth(); printDaysMonth(); 
