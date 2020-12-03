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
    let targetEvent = eventList.filter(el => el.initialDate === e.target.id && el.title === e.target.textContent);
    eventCardDetailsTextElement.innerHTML = `
      <p class="event__card__body__details">Title: <span>${targetEvent[0].title}</span></p>
      <p class="event__card__body__details">Initial date: <span>${targetEvent[0].initialDate}</span></p>
      <p class="event__card__body__details">Initial time: <span>${targetEvent[0].initialTime}</span></p>
      <p class="event__card__body__details">End date: <span>${targetEvent[0].endDate}</span></p>
      <p class="event__card__body__details">End time: <span>${targetEvent[0].endTime}</span></p>
      <p class="event__card__body__details">Reminder: <span>${targetEvent[0].reminder}</span></p>
      <p class="event__card__body__details">Description: <span>${targetEvent[0].description}</span></p>
      <p class="event__card__body__details">Type: <span>${targetEvent[0].type}</span></p>
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
    if (el.initialDate === e.target.id && el.title === e.target.textContent) {
      eventList.splice(i, 1);
      localStorage.setItem('allEventList', JSON.stringify(eventList));
      eventCardTextElement.classList.add('hide');
      calendarDaysDiv.innerHTML = '';
      howManyPastDays = 0;
      startDayMonth();
      printDaysMonth();
      endDayMonth();
    }
  })
}