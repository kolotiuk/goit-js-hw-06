const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listRef = document.querySelector('#ingredients');

const markup = ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    item.classList.add('item');
    return item;
});

listRef.append(...markup);
