const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
  btnClear: document.querySelector('.clear'),
};
refs.input.addEventListener('input', changeNameInput);

function changeNameInput(text) {
  if (refs.input.value === '') {
    refs.output.textContent = 'незнайомець';
  } else (
    refs.output.textContent = text.currentTarget.value
  ) 
};

