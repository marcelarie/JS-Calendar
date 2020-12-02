// DOM REFERENCE
const calendarTextElement = document.getElementById('calendar__days__number');
const eventCardTextElement = document.getElementById('event-card');
const closeEventCardBtn = document.getElementById('close-event-icon');
const eventCardDetailsTextElement = document.getElementById('event-details');
const deleteEventBtn = document.getElementById('delete-event-btn');

// EVENT LISTENERS
calendarTextElement.addEventListener('click', (e) => {
  if (e.target.classList.contains('calendar__event')) {
    eventCardTextElement.classList.remove('hide');
    let targetEvent = eventList.filter(el => el.initialDate === e.target.id);
    eventCardDetailsTextElement.innerHTML = `
      <p class="event__card__body__details">Title: ${targetEvent[0].title}</p>
      <p class="event__card__body__details">Initial date: ${targetEvent[0].initialDate}</p>
      <p class="event__card__body__details">Initial time: ${targetEvent[0].initialTime}</p>
      <p class="event__card__body__details">End date: ${targetEvent[0].endDate}</p>
      <p class="event__card__body__details">End time: ${targetEvent[0].endTime}</p>
      <p class="event__card__body__details">Reminder: ${targetEvent[0].reminder}</p>
      <p class="event__card__body__details">Description: ${targetEvent[0].description}</p>
      <p class="event__card__body__details">Type: ${targetEvent[0].type}</p>
    `;
  }

  deleteEventBtn.addEventListener('click', () => {
    eventCardTextElement.classList.remove('hide');
    deleteItemFromLocalStorage(e);
  })

  closeEventCardBtn.addEventListener('click', () => {
    eventCardTextElement.classList.add('hide');
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      eventCardTextElement.classList.add('hide');
    }
  })
})



// FUNCTIONS
function deleteItemFromLocalStorage(e) {
  deleteEventBtn.removeEventListener('click', deleteItemFromLocalStorage);
  eventList.forEach((el, i) => {
    if (el.initialDate === e.target.id) {
      eventList.splice(i, 1);
      localStorage.setItem('allEventList', JSON.stringify(eventList));
      calendarDaysDiv.innerHTML = '';
      howManyPastDays = 0;
      startDayMonth();
      printDaysMonth();
      endDayMonth();
      eventCardTextElement.classList.add('hide');
    }
  })
}