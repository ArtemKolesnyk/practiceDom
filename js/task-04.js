const btnRef = {
  incCountValue: document.querySelector('[data-action="increment"]'),
  decCountValue: document.querySelector('[data-action="decrement"]'),
  curCountValue: document.querySelector('#value'),
};

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  btnRef.curCountValue.textContent = counterValue;
};


const decrement = () => {
  counterValue -= 1;
  btnRef.curCountValue.textContent = counterValue;
};

btnRef.incCountValue.addEventListener('click', increment);
btnRef.decCountValue.addEventListener('click', decrement);

