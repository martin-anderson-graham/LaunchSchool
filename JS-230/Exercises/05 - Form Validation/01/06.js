/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('form');
  let formSubmitted = false;

  const errorMessages = {
    required: "This field is required",
    tooShort: "Your password needs to be at least 10 characters",
    phoneFormat: "Your phone number must be of the form 111-111-1111",
    emailFormat: "Your email should be something@something",
    nameFormat: "That is not a valid name",
    creditFormat: "That is not a valid credit card"
  };

  function writeErrorMessage(div, message) {
    let errorP = document.createElement('p');
    errorP.classList.add('errorMessage');
    errorP.textContent = message;
    div.appendChild(errorP);
    div.querySelector('input').classList.add('errorInput');
  }

  function removeErrorMessage(div) {
    if (div.lastElementChild.tagName === 'P') {
      div.removeChild(div.lastElementChild);
    }
    document.querySelector('div > input').classList.remove('errorInput');
  }

  function checkWholeForm() {
    let allInputs = form.querySelectorAll('#form > div');
    let inputsArr = Array.from(allInputs);

    inputsArr.forEach(input => {
      input.dispatchEvent('focusout');
    });

    if (inputsArr.some(ele => !ele.validity.valid)) {
      form.classList.add('errorInput');
      document.getElementById('formError').hidden = false;
      return false;
    } else {
      return true;
    }
  }

  function checkToRemoveFormMessage() {
    if (!formSubmitted) return;
    if (form.checkValidity()) {
      document.getElementById('formError').hidden = true;
      form.classList.remove('errorInput');
    }
  }


  form.addEventListener('focusout', (event) => {
    let ele = event.target;
    if (!ele.validity.valid) {
      let msg = '';
      if (ele.validity.valueMissing) {
        msg = errorMessages.required;
      } else if (ele.validity.patternMismatch) {
        if (ele.id === 'phone') msg = errorMessages.phoneFormat;
        if (ele.id === 'email') msg = errorMessages.emailFormat;
        if (ele.id === 'firstname' || ele.id === 'lastname') msg = errorMessages.nameFormat;
        if (ele.id === 'creditcard') msg = errorMessages.creditFormat;
      } else if (ele.validity.tooShort) {
        msg = errorMessages.tooShort;
      }
      writeErrorMessage(ele.parentNode, msg);
      checkToRemoveFormMessage();
    } else {
      ele.classList.remove('errorInput');
    }
  });

  form.addEventListener('focusin', (event) => {
    let ele = event.target;
    removeErrorMessage(ele.parentNode);
  });

  form.addEventListener('submit', (event) => {
    formSubmitted = true;
    event.preventDefault();
    // if (!checkWholeForm()) {
    //   event.preventDefault();
    // } else {
    (new FormData(form)).forEach( ele => console.log(ele));
    let data = (new URLSearchParams(new FormData(form))).toString();
    console.log(data);
    // }
  });

  document.getElementById('firstname').addEventListener('keypress', event => {
    if (!event.key.match(/[a-z]/, 'i')) {
      event.preventDefault();
    }
  });

  document.getElementById('creditFields').addEventListener('keyup', (event) => {
    let ele = event.target;
    console.log(ele.nextElementSibling);
    if (ele.value.length === 4 && ele.nextElementSibling) {
      ele.nextElementSibling.focus();
    }
  });
});