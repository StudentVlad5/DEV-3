const form = document.querySelector('form.login-form');

form.addEventListener('submit', onFormSubmit);
function onFormSubmit (event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    if(!mail || !password) {alert('все поля должны быть заполнены')}
    else {
        const DataElements = {
            mail, password
        };
        form.reset();
        console.log (DataElements);
    }
    const array = {};
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name)=>
    array[name] = value,
    )
}
