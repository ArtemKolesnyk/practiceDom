
const refs = {
  controlFontSize: document.querySelector("#font-size-control"),
  textSize: document.querySelector("#text")
};

refs.controlFontSize.addEventListener('input', changeFontSize);

function changeFontSize() {
  const size = refs.controlFontSize.value;
  refs.textSize.style.fontSize = size + 'px';
};