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

// VARIABLES
let newEvent = {};
let eventList = [];

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
})

eventEndDateCheckbox.addEventListener('change', () => {
  eventEndDate.classList.toggle('hide');
})

reminderCheckbox.addEventListener('change', () => {
  reminderDate.classList.toggle('hide');
})

saveEventBtn.addEventListener('click', (e) => {
  e.preventDefault();
  newEvent = {
    title: eventTitle.value,
    initialDate: eventIntialDate.value,
    endDate: eventEndDateValue.value,
    reminder: reminderDateValue.value,
    description: eventDescription.value,
    type: eventType.value
  }
  eventList.push(newEvent);
  console.log(eventList);
})
