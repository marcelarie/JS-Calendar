// HTML 
let currentDayOfTheMonth = document.querySelectorAll('.calendar__days__number')
let pastEvents = JSON.parse(localStorage.getItem('previousEvent'))
let currentEvents = JSON.parse(localStorage.getItem('futureEvent'))
let eventArray = [];

// formats the date to year-month-day.
function getFormatedDate(arr) {
    for ( let item = 0; item < arr.length; item++) {
        eventArray.push(arr[item].initialDate.slice(0,10))
    }
}

function findCurrentEvents(arr) {
    for ( let currentEvent = 0; currentEvent < arr.length; currentEvent++ ) {
        //   v      year of the event   v 
        if ( arr[currentEvent].substr(0,4) == actualYear ) {
            //   v         month of the event         v 
            if ( arr[currentEvent].substr(5).substr(0,2) == actualMonth ) {
                for ( let i = 0; i < currentDayOfTheMonth.length; i++ ) {
                    //   v          day number of the div             v                 v          day of the event        v
                    if ( parseFloat(currentDayOfTheMonth[i].textContent) === parseFloat(arr[currentEvent].substr(5).substr(3)) ) {
                        let div = document.createElement('div');
                        div.classList.add('calendar__event')
                        div.textContent = 'test'
                        currentDayOfTheMonth[i].appendChild(div)
                    }
                }
            }
         }
    }
}
