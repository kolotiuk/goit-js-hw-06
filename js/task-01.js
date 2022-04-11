const itemRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemRef.length}`);

itemRef.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
});
