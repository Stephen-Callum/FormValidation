// Input fields
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');

// Form
const form = document.getElementById('myForm');

// Validation colors
const green = '#4CAF50';
const red = '#F44336';

function validateFirstName() {
    // Check if field is empty
    if(checkIfEmpty(firstName)) return;

    // Check if only letters
    if(!checkIfOnlyLetters(firstName)) return;
    return true;
}

function validateLastName() {
    // Check if field is empty
    if(checkIfEmpty(lastName)) return;

    // Check if only letters
    if(!checkIfOnlyLetters(lastName)) return;
    return true;
}

function checkIfEmpty(field) {
    if(isEmpty(field.value.trim())) {
        //set field invalid
        setInvalid(field, `${field.name} must not be empty`);
        return true;
    } else {
        //set field valid, return false
        setValid(field);
        return false;
    }
}

function isEmpty(value) {
    if(value === '') return true;
    return false;
}

function setInvalid(field, message) {
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field, message) {
    field.className = 'valid';
    field.nextElementSibling.innerHTML = '';
    field.nextElementSibling.style.color = green;
}

function checkIfOnlyLetters(field) {
    if(/^[a-zA-Z ]+$/.test(field.value)) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, `${field.name} must contain only letters`);
        return false;
    }
}