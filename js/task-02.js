const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

ingredients.forEach((ingredient) => {
    const listIngredients = document.querySelector("#ingredients");
    const itemElement = document.createElement("li");
    itemElement.innerHTML = ingredient;
    listIngredients.append(itemElement);
});
