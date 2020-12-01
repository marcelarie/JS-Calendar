let date = new Date();
let actualYear = date.getFullYear();
let actualMonth = date.getMonth() + 1;
const pastMonth = date.getMonth();
const monthsArray = {01: 'January', 02: 'February', 03: 'March', 04: 'April', 05: 'May', 06: 'June', 07: 'July', 08: 'August', 09: 'September', 10: 'October', 11: 'November', 12: 'December', }
const numberOfDaysMonth = new Date(actualYear, actualMonth, 0).getDate();
const firstDayOfMonth = new Date(actualYear, actualMonth - 1, 1);
const firstDayOfNextMonth = new Date(actualYear, actualMonth, 1);
const lastDayPastMonth = new Date(actualYear, pastMonth, 0).getDate();
let howManyPastDays = 0;
const firstDayOfMonthNum = firstDayOfMonth.getDay();
// const weekArray = {0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'}

// HTML Variables.
const htmlYear = document.getElementById('calendar__title__year');
const htmlMonth = document.getElementById('calendar__title__month');
const calendarDaysDiv = document.getElementById('calendar__days__number')
const calendarDaysDivPast = document.querySelector('.calendar__days__number__past')

// Show the actual year on the month title.
function showActualTitle() {
    htmlYear.textContent = actualYear;
    htmlMonth.textContent = monthsArray[actualMonth];
}

// Print the days of the month on the body grid.
function printDaysMonth() {
    for (let day = 1; day <= numberOfDaysMonth; day++) {
        let dayDiv = document.createElement('div');
        dayDiv.classList.add('calendar__days__number')
        dayDiv.textContent = day;
        calendarDaysDiv.appendChild(dayDiv);
    }
    printDaysMonthNext();
}


// Print the days of the past/future month on the body grid.
function printDaysMonthPast(a) {
    for (let i = 0; i < a; i++) {
        let dayDivPast = document.createElement('div');
        dayDivPast.classList.add(`calendar__days__number__past`)
        dayDivPast.classList.add(`past__month__days${i}`)
        switch (a) {
            case 1:
            dayDivPast.textContent = lastDayPastMonth;
            howManyPastDays++;
            break;
            case 2:
            dayDivPast.textContent = lastDayPastMonth - 1;
            if (dayDivPast.classList.contains('past__month__days1')) {
                dayDivPast.textContent = lastDayPastMonth;
            }
            howManyPastDays++;
            break;
            case 3:
            dayDivPast.textContent = lastDayPastMonth - 2;
            if (dayDivPast.classList.contains('past__month__days1')) {
                dayDivPast.textContent = lastDayPastMonth - 1 ;
            } else if (dayDivPast.classList.contains('past__month__days2')) {
                dayDivPast.textContent = lastDayPastMonth;
                }
            howManyPastDays++;
            break;
            case 4:
            dayDivPast.textContent = lastDayPastMonth - 3;
            if (dayDivPast.classList.contains('past__month__days1')) {
                dayDivPast.textContent = lastDayPastMonth - 2 ;
            } else if (dayDivPast.classList.contains('past__month__days2')) {
                dayDivPast.textContent = lastDayPastMonth - 1;
                } else if (dayDivPast.classList.contains('past__month__days3')) {
                    dayDivPast.textContent = lastDayPastMonth;
                }
            howManyPastDays++;
            break;
            case 5:
            dayDivPast.textContent = lastDayPastMonth - 4;
            if (dayDivPast.classList.contains('past__month__days1')) {
                dayDivPast.textContent = lastDayPastMonth - 3;
            } else if (dayDivPast.classList.contains('past__month__days2')) {
                dayDivPast.textContent = lastDayPastMonth - 2 ;
                } else if (dayDivPast.classList.contains('past__month__days3')) {
                    dayDivPast.textContent = lastDayPastMonth - 1;
                    } else if (dayDivPast.classList.contains('past__month__days4')) {
                        dayDivPast.textContent = lastDayPastMonth;
                    }
            howManyPastDays++;
            break;
            case 6:
            dayDivPast.textContent = lastDayPastMonth - 5;
            if (dayDivPast.classList.contains('past__month__days1')) {
                dayDivPast.textContent = lastDayPastMonth - 4;
            } else if (dayDivPast.classList.contains('past__month__days2')) {
                dayDivPast.textContent = lastDayPastMonth - 3 ;
                } else if (dayDivPast.classList.contains('past__month__days3')) {
                    dayDivPast.textContent = lastDayPastMonth - 2;
                    } else if (dayDivPast.classList.contains('past__month__days4')) {
                        dayDivPast.textContent = lastDayPastMonth - 1;
                    } else if (dayDivPast.classList.contains('past__month__days5')) {
                        dayDivPast.textContent = lastDayPastMonth;
                    }
            howManyPastDays++;
            break;
            case 7:
            dayDivPast.textContent = lastDayPastMonth - 6;
            if (dayDivPast.classList.contains('past__month__days1')) {
                dayDivPast.textContent = lastDayPastMonth - 5;
            } else if (dayDivPast.classList.contains('past__month__days2')) {
                dayDivPast.textContent = lastDayPastMonth - 4 ;
                } else if (dayDivPast.classList.contains('past__month__days3')) {
                    dayDivPast.textContent = lastDayPastMonth - 3;
                    } else if (dayDivPast.classList.contains('past__month__days4')) {
                        dayDivPast.textContent = lastDayPastMonth - 2;
                    } else if (dayDivPast.classList.contains('past__month__days5')) {
                        dayDivPast.textContent = lastDayPastMonth - 1;
                    } else if (dayDivPast.classList.contains('past__month__days6')) {
                        dayDivPast.textContent = lastDayPastMonth;
                    }
            howManyPastDays++;
            break;
        }
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
function endDayMonth() {
    printDaysMonthNext(35 - numberOfDaysMonth - howManyPastDays);
}
function printDaysMonthNext(a) {
    for ( let i = 0; i < a; i++) {
        let dayDivNext = document.createElement('div');
        dayDivNext.classList.add(`calendar__days__number__next`)
        dayDivNext.textContent = i +1;
        calendarDaysDiv.appendChild(dayDivNext);
    }
}

//              1*                 2*               3*                4* 
window.onload = showActualTitle(); startDayMonth(); printDaysMonth(); endDayMonth();


