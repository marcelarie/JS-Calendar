const calendarTextElement = document.getElementById('calendar__days__number');
const eventCardTextElement = document.getElementById('event-card');
const closeEventCardBtn = document.getElementById('close-event-icon');
const eventCardDetailsTextElement = document.getElementById('event-details');
const deleteEventBtn = document.getElementById('delete-event-btn');

let eventDetails = JSON.parse(localStorage.getItem("allEventList"));

calendarTextElement.addEventListener('click', (e) => {
  if (e.target.classList.contains('calendar__event')) {
    eventCardTextElement.classList.remove('hide');
    let targetEvent = eventDetails.filter(evt => evt.initialDate === e.target.id);
    eventCardDetailsTextElement.innerHTML = `
      <p>Title: ${targetEvent[0].title}</p>
      <p>Initial date: ${targetEvent[0].initialDate}</p>
      <p>Initial time: ${targetEvent[0].initialTime}</p>
      <p>End date: ${targetEvent[0].endDate}</p>
      <p>End date: ${targetEvent[0].endTime}</p>
      <p>${targetEvent[0].reminder}</p>
      <p>${targetEvent[0].description}</p>
      <p>${targetEvent[0].type}</p>
      `;
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