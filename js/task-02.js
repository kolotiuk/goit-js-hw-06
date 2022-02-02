const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

ingredients.map((ingredient) => {
    const itemElement = document.createElement("li");
    itemElement.classList = "item";
    itemElement.textContent = ingredient;
    listIngredients.appendChild(itemElement);
});
