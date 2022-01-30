const catefories = document.querySelectorAll(".item");
console.log(`Number of categories: ${catefories.length}`);

catefories.forEach((category) => {
    const textHeader = category.firstElementChild;
    const amountElements = category.lastElementChild.children.length;
    console.log(`Category:`, textHeader.textContent);
    console.log(`Elements:`, amountElements);
});
