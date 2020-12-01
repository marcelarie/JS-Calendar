// HTML 
let currentDayOfTheMonth = document.querySelectorAll('.calendar__days__number');
let eventArray = [];

// formats the date to year-month-day.
function getFormatedDate(arr) {
    eventArray = [];
    for (let item = 0; item < arr.length; item++) {
        eventArray.push(arr[item].initialDate.slice(0, 10));
    }
}

