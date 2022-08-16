const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector('[type="number"]');
const btnCreateRef = document.querySelector("[data-create]");
const btnDestroyRef = document.querySelector("[data-destroy]");

const createBoxes = (amount) => {
    amount = inputRef.value;
    const arr = [];
    let size = 30;

    for (let i = 0; i < amount; i += 1) {
        const createDiv = document.createElement("div");
        createDiv.style.width = `${size}px`;
        createDiv.style.height = `${size}px`;
        createDiv.style.backgroundColor = getRandomHexColor();
        size += 10;

        arr.push(createDiv);
    }
    inputRef.value = "";
    boxesRef.append(...arr);
};

btnCreateRef.addEventListener("click", createBoxes);

const destroyBoxes = () => {
    boxesRef.innerHTML = "";
};

btnDestroyRef.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}


