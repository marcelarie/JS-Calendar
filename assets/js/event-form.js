// DOM REFERENCE
const createNewEventBtn = document.getElementById('add-event');
const createNewEventForm = document.getElementById('create-new-event');
const createNewEventChild = document.getElementById('create-event-child');
const closeFormBtn = document.getElementById('close-icon');
const eventTitle = document.getElementById('title');
const eventIntialDate = document.getElementById('inital-date');
const eventEndDateCheckbox = document.getElementById('end-date-checkbox');
const eventEndDate = document.getElementById('end-date-option');
const eventEndDateValue = document.getElementById('end-date');
const reminderCheckbox = document.getElementById('reminder-checkbox');
const reminderDate = document.getElementById('reminder-option');
const reminderDateValue = document.getElementById('alert-time-before');
const eventDescription = document.getElementById('description');
const eventType = document.getElementById('type-event');
const saveEventBtn = document.getElementById('create-event-btn');
const cancelEventBtn = document.getElementById('cancel-event-btn');
const createNewEventOnDayDiv = document.querySelectorAll('.createEventButton')

// VARIABLES
let newEvent = {};
let eventList = JSON.parse(localStorage.getItem("allEventList")) || [];

// EVENT LISTENERS
createNewEventBtn.addEventListener('click', () => {
  createNewEventForm.classList.remove('hide');
  document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') createNewEventForm.classList.add('hide');
  })
  createNewEventForm.addEventListener('click', (e) => {
    if (e.target.id == 'create-new-event') createNewEventForm.classList.add('hide');
  })
  closeFormBtn.addEventListener('click', () => {
    createNewEventForm.classList.add('hide');
  })
  cancelEventBtn.addEventListener('click', () => {
    createNewEventForm.classList.add('hide');
  })
})

document.getElementById('event-form').addEventListener('change', () => {
  if (eventTitle.value !== '' && eventIntialDate.value !== '') saveEventBtn.disabled = false;
  if (eventEndDateCheckbox.checked) {
    if (eventEndDateValue.value < eventIntialDate.value) saveEventBtn.disabled = true;
  }
})

eventEndDateCheckbox.addEventListener('change', () => {
  eventEndDate.classList.toggle('hide');
})

reminderCheckbox.addEventListener('change', () => {
  reminderDate.classList.toggle('hide');
})

saveEventBtn.addEventListener('click', (e) => {
  e.preventDefault();
  createNewEvent();
  calendarDaysDiv.innerHTML = '';
  howManyPastDays = 0;
  startDayMonth();
  printDaysMonth();
  endDayMonth();
})


function createNewEvent() {
  newEvent = {
    title: eventTitle.value,
    initialDate: eventIntialDate.value.slice(0,10),
    initialTime: eventIntialDate.value.slice(11,),
    endDate: eventEndDateValue.value.slice(0,10),
    endTime: eventEndDateValue.value.slice(11,),
    reminder: reminderDateValue.value,
    description: eventDescription.value,
    type: eventType.value
  }
  eventList.push(newEvent);
  // new Date(newEvent.initialDate) < new Date() ? expiredEventList.push(newEvent) : eventList.push(newEventList);

  localStorage.setItem("allEventList", JSON.stringify(eventList));

  eventTitle.value = '';
  eventIntialDate.value = '';
  eventEndDateValue.value = '';
  reminderDateValue.value = '';
  eventDescription.value = '';
  eventType.value = '';
  saveEventBtn.disabled = true;

  createNewEventForm.classList.add('hide');
}



