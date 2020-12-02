const calendarTextElement = document.getElementById('calendar__days__number');
const eventCardTextElement = document.getElementById('event-card');
const closeEventCardBtn = document.getElementById('close-event-icon');
const eventCardDetailsTextElement = document.getElementById('event-details');
const deleteEventBtn = document.getElementById('delete-event-btn');

let eventDetails = JSON.parse(localStorage.getItem("allEventList"));

calendarTextElement.addEventListener('click', (e) => {
  if (e.target.classList.contains('calendar__event')) {
    eventCardTextElement.classList.remove('hide');
    let event = eventDetails.filter(evt => evt.title === e.target.textContent);
    // eventCardDetailsTextElement.innerHTML = '<h1>event-details</h1>';
    console.log(event);
  }
  closeEventCardBtn.addEventListener('click', () => {
    eventCardTextElement.classList.add('hide');
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      eventCardTextElement.classList.add('hide');
    }
  })
})

deleteEventBtn.addEventListener('click', () => {
})