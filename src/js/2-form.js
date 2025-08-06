const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  input.value = parsedData.email || '';
  textarea.value = parsedData.message || '';

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
}

form.addEventListener('input', e => {
  formData.email = input.value;
  formData.message = textarea.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  if (input.value.trim() === '' || textarea.value.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted data:', formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  input.value = '';
  textarea.value = '';
});