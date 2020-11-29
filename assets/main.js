// DOM REFERENCE
const createNewEventBtn = document.getElementById('add-event');
const createNewEventForm = document.getElementById('create-new-event');
const closeFormBtn = document.getElementById('close-icon');
const eventTitle = document.getElementById('title');
const eventIntialDate = document.getElementById('inital-date');
const eventEndDateCheckbox = document.getElementById('end-date-checkbox');
const eventEndDate = document.getElementById('end-date-option');
const reminderCheckbox = document.getElementById('reminder-checkbox');
const reminderDate = document.getElementById('reminder-option');
const eventDescription = document.getElementById('description');
const eventType = document.getElementById('type-event');
const saveEventBtn = document.getElementById('create-event-btn');
const cancelEventBtn = document.getElementById('cancel-event.-btn')

// VARIABLES

// EVENT LISTENERS
createNewEventBtn.addEventListener('click', () => {
  createNewEventForm.classList.remove('hide');
})

closeFormBtn.addEventListener('click', () => {
  createNewEventForm.classList.add('hide');
})

eventEndDateCheckbox.addEventListener('change', () => {
  eventEndDate.classList.toggle('hide');
})

reminderCheckbox.addEventListener('change', () => {
  reminderDate.classList.toggle('hide');
})