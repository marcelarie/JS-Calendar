let timer = setInterval( () => {
    setRemainder();
}, 10000)

function setRemainder() {
  eventList.map(el => {
    if (new Date(el.initialDate).getDate() === new Date().getDate() && el.reminder) {
      // GET AND FORMAT THE ACTUAL TIME
      let getCurrentHour = new Date().getHours();
      let getCurrentMinutes = new Date().getMinutes();
      if (getCurrentMinutes < 9) getCurrentMinutes = '0' + getCurrentMinutes;
      // CHANGE THE ACTUAL TIME IN MINUTES
      let actualHourToMinutes = getCurrentHour * 60; // from hours to minutes
      let acutalTimeToMinutes = parseFloat(actualHourToMinutes) + parseFloat(getCurrentMinutes); // hours + minutes
      // GET AND FORMAT THE EVENT TIME
      let getEventHour = el.initialTime.slice(0,2);
      let getEventMinutes = el.initialTime.slice(3,);
      let hourToMinutes = getEventHour * 60; // from hours to minutes
      let eventTimeToMinutes = parseFloat(hourToMinutes) + parseFloat(getEventMinutes); // hours + minutes
      let timeToReminder = eventTimeToMinutes - parseFloat(el.reminder); // event time - event reminder
      let timeBeforeAlert = timeToReminder - acutalTimeToMinutes;
      if (parseFloat(timeBeforeAlert) == 0) {
        alert(`Your event will start in ${el.reminder} minutes`);
        clearInterval(timer);
      }
    }
  })
}

