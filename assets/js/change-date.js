// HTML variables
const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');

leftArrow.addEventListener('click', () => {
    removeDays();
    changePastMonth();
});
rightArrow.addEventListener('click', changeNextMonth);

function removeDays() {
    calendarDaysDiv.innerHTML = '';
    if ( actualMonth === 1 ) {
        actualMonth = 12;
        actualYear--;
    } else {
        actualMonth--;
    }
}
function changePastMonth() {
    showActualTitle();
    startDayMonth();
    printDaysMonth();
    endDayMonth();
}
function changeNextMonth() {
}
