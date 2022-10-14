const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const IngredientsUlRef = document.querySelector('#ingredients');

const markupIngredients = ingredients.map(ingredient => {
  const newLi = document.createElement('li');
  newLi.append(ingredient);
  return newLi;
});
IngredientsUlRef.append(...markupIngredients);

