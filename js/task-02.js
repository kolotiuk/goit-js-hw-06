const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const listRef = document.querySelector("#ingredients");

const markup = ingredients.map((el) => {
    const createItem = document.createElement("li");
    createItem.textContent = el;
    createItem.classList.add("item");
    return createItem;
});
listRef.append(...markup);
