// HTML variables
const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');

leftArrow.addEventListener('click', () => {
    removeDays();
    changePastMonth();
});
rightArrow.addEventListener('click', () => {
    removeDays();
    changeNextMonth();
});

// resets calendar body html
function removeDays() {
    calendarDaysDiv.innerHTML = '';
    howManyPastDays = 0;
}
// rest a value to the actual month/year when needed
function changePastMonth() {
    if (actualMonth <= 1) {
        actualMonth = 12;
        actualYear--;
    } else {
        actualMonth--;
    }
    date = new Date(actualYear, actualMonth - 1);
    numberOfDaysMonth = new Date(actualYear, actualMonth, 0).getDate();
    showActualTitle();
    startDayMonth();
    printDaysMonth();
    endDayMonth();
}
function changeNextMonth() {
    if (actualMonth >= 12) {
        actualMonth = 1;
        actualYear++;
    } else {
        actualMonth++;
    }
    showActualTitle();
    startDayMonth();
    printDaysMonth();
    endDayMonth();
}
