const inputRef = document.querySelector('#validation-input');


inputRef.addEventListener('blur', validLengthInput);


function validLengthInput(event) {
  if (inputRef.getAttribute('data-length') == event.currentTarget.value.length) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
  }
};

