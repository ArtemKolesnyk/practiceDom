const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};
refs.input.addEventListener('input', onInputFocus);

function onInputFocus(e) {
  if (refs.input.value === '') {
    refs.output.textContent = 'незнайомець';
  } else (
    refs.output.textContent = e.currentTarget.value
  ) 
};

