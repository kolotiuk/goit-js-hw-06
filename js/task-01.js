const listRef = document.querySelector("#categories");
console.log(`Number of categories: ${listRef.children.length}`);

document.querySelectorAll(".item").forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
});
