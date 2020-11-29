const createNewEventBtn = document.getElementById('add-event');
const createNewEventForm = document.getElementById('create-new-event');
const closeFormBtn = document.getElementById('close-icon');

createNewEventBtn.addEventListener('click', () => {
  createNewEventForm.classList.remove('hide');
})

closeFormBtn.addEventListener('click', () => {
  createNewEventForm.classList.add('hide');
})
