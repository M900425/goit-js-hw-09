
const formData = { email: "", message: "" };

const form = document.querySelector(`.feedback-form`);
const textarea = form.querySelector(`textarea`);
const input = form.querySelector(`input`);

form.addEventListener(`input`, e => {
    formData.email = input.value;
    formData.message = textarea.value;
    localStorage.setItem(`feedback-form-state`, JSON.stringify(formData));
});

const savedData = localStorage.getItem(`feedback-form-state`);
if (savedData) {
    const parsedData = JSON.parse(savedData);
    input.value = parsedData.email || ``;
    textarea.value = parsedData.message || ``;
};

form.addEventListener('submit', e => {
    e.preventDefault();

    if (textarea.value === `` || input.value === ``) {
        alert('Fill please all fields');
        return;
    }

    localStorage.removeItem(`feedback-form-state`);
    formData.email = ``;
    formData.message = ``;
    input.value = ``;
    textarea.value = ``;
});