function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    amount = inputNumber.value;
    const boxArrays = [];
    let size = 30;
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        size += 10;
        boxArrays.push(div);
    }
    inputNumber.value = '';
    boxes.append(...boxArrays);
}

function destroyBoxes() {
    boxes.innerHTML = '';
}