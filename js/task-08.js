const refs = {
  render: document.querySelector('[data-action="render"]'),
  destroy: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
  inputValu: document.querySelector('#controls input'), 
};

refs.render.addEventListener('click', getAmount);
refs.destroy.addEventListener('click', destroyBoxes);

function getAmount() {
  const amount = refs.inputValu.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    let div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  refs.boxes.appendChild(fragment);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

function random() {
  return Math.floor(Math.random() * 256);
}