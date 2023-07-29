import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);

const LS_KEY = 'feedback-form-state';
const { email, message } = formEl.elements;
const formData = {};

const savedData = checkStorage();
if (savedData) {
  email.value = savedData.email || '';
  message.value = savedData.message || '';
}

function onInput() {
  formData.email = email.value,
 formData.message = message.value,

  localStorage.setItem(LS_KEY, JSON.stringify(formData) || {});
}

function onSubmit(evt) {
  evt.preventDefault();
  if (email.value.trim() === '' || message.value.trim() === '') {
    return alert('Please, fill out all the fields!');
  }
  console.log(formData);
  localStorage.removeItem(LS_KEY);
  evt.currentTarget.reset();
}

function checkStorage() {
  try {
    const formData = localStorage.getItem(LS_KEY);
    return formData ? JSON.parse(formData) : {};
  } catch (err) {
    console.log(err.message);
  }
}
