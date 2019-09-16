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

// Validator functions
function validateFirstName() {
  // Check if field is empty
  if (checkIfEmpty(firstName)) return;

  // Check if only letters
  if (!checkIfOnlyLetters(firstName)) return;
  return true;
}

function validateLastName() {
  // Check if field is empty
  if (checkIfEmpty(lastName)) return;

  // Check if only letters
  if (!checkIfOnlyLetters(lastName)) return;
  return true;
}

function validatePassword() {
  // Check if field empty
  if (checkIfEmpty(password)) return;

  // Check password length
  if (!meetLength(password, 4, 100)) return;

  // Check password against character set
  if (!containsCharacters(password, 4)) return;
  return true;
}

function validateConfirmPassword() {
    if(password.className !== 'valid') {
        setInvalid(confirmPassword, `Password must be valid.`);
        return;
    }
    
    // check if identical
    if(password.value !== confirmPassword.value) {
        setInvalid(confirmPassword, 'Passwords must match.');
        return;
    } else {
        setValid(confirmPassword);
    }
    return true;
}


/* Utility functions */

function checkIfEmpty(field) {
  if (isEmpty(field.value.trim())) {
    //set field invalid
    setInvalid(field, `${field.name} must not be empty.`);
    return true;
  } else {
    //set field valid, return false
    setValid(field);
    return false;
  }
}

// checks if field is empty
function isEmpty(value) {
  if (value === '') return true;
  return false;
}

// sets field to invalid
function setInvalid(field, message) {
  field.className = 'invalid';
  field.nextElementSibling.innerHTML = message;
  field.nextElementSibling.style.color = red;
}

// sets field to valid
function setValid(field) {
  field.className = 'valid';
  field.nextElementSibling.innerHTML = '';
  field.nextElementSibling.style.color = green;
}

// checks if only letters pass into field
function checkIfOnlyLetters(field) {
  if (/^[a-zA-Z ]+$/.test(field.value)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, `${field.name} must contain only letters.`);
    return false;
  }
}

// Checks if field param is between min-max length
function meetLength(field, minLength, maxLength) {
  if (field.value.length >= minLength && field.value.length < maxLength) {
    setValid(field);
    return true;
  } else if (field.value.length < minLength) {
    setInvalid(
      field,
      `${field.name} must be at least ${minLength} characters long.`
    );
    return false;
  } else {
    setInvalid(
      field,
      `${field.name} must be shorter than ${maxLength} characters.`
    );
    return false;
  }
}

function containsCharacters(field, code) {
  let regEx;

  switch (code) {
    case 1:
      // only letters
      regEx = /(?=.*[a-zA-Z])/;
      return matchWithRegEx(
        regEx,
        field,
        `${field.name} must contain at least one letter.`
      );
    case 2:
      // At least one letter and one number
      regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
      return matchWithRegEx(
        regEx,
        field,
        `${field.name} must contain at least one letter and one number.`
      );
    case 3:
      // uppercase, lowercase and number
      regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
      return matchWithRegEx(
        regEx,
        field,
        `${field.name} must contain at least one upper case, one lower case and a number.`
      );
    case 4:
      // upper case, lower case, number and special character
      regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
      return matchWithRegEx(
        regEx,
        field,
        `${field.name} must contain at least one upper case, one lower case, one number and a special character.`
      );
    default:
      return false;
  }
}

function matchWithRegEx(regEx, field, message) {
  if (field.value.match(regEx)) {
    setValid(field);
    return true;
  } else {
    setInvalid(field, message);
    return false;
  }
}
