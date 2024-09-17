
const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur',(event)=>{
    validationInput.classList.remove(`valid`);
    validationInput.classList.remove(`invalid`);
    event.currentTarget.value.length === +(validationInput.dataset.length) ? validationInput.classList.add(`valid`):
    validationInput.classList.add('invalid')
})