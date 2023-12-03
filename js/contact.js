let regularExpressionForName = /^[a-zA-Z]+$/; 
let regularExpressionForEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


function clearErrors() {
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let email = document.getElementById('email');

    // Removes the error class
    firstName.classList.remove('input-error');
    lastName.classList.remove('input-error');
    email.classList.remove('input-error');

    // Clears the error message
    document.getElementById('firstname-error').innerText = '';
    document.getElementById('lastname-error').innerText = '';
    document.getElementById('email-error').innerText = '';
}


function validateForm() {
    clearErrors();
    let valid = true;
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let email = document.getElementById('email');

    if (firstName.value.length <= 0) {
        valid = false;
        firstName.classList.add('input-error');
        document.getElementById('firstname-error').innerText += '* First Name is mandatory.';

    } else if (!regularExpressionForName.test(firstName.value)) {
        valid = false;
        firstName.classList.add('input-error');
        document.getElementById('firstname-error').innerText += '* First Name should contain only letters.';
    }

    if (lastName.value.length <= 0) {
        valid = false;
        lastName.classList.add('input-error');
        document.getElementById('lastname-error').innerText += '* Last Name is mandatory.';

    } else if (!regularExpressionForName.test(lastName.value)) {
        valid = false;
        lastName.classList.add('input-error');
        document.getElementById('lastname-error').innerText += '* Last Name should contain only letters.';
    }

    if (email.value.length <=0) {
        valid = false;
        email.classList.add('input-error');
        document.getElementById('email-error').innerText += '* Email address is mandatory.';
    } else if (!regularExpressionForEmail.test(email.value)) {
        valid = false;
        email.classList.add('input-error');
        document.getElementById('email-error').innerText += '* Wrong email format.';
    }

    return valid;
}