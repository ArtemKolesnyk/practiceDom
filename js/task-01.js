const countCategory = document.querySelectorAll('.item');
console.log(`В списке ${countCategory.length} категории`);
[...countCategory].forEach((el) => {
  console.log(`Категория: ${el.firstElementChild.textContent}
  Количество элементов: ${el.lastElementChild.children.length}`)
});