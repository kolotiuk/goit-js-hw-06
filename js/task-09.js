const btnChangeRef = document.querySelector(".change-color");
const textColorRef = document.querySelector(".color");

const onChange = () => {
    textColorRef.textContent = getRandomHexColor();
    document.body.style.backgroundColor = getRandomHexColor();
};

btnChangeRef.addEventListener("click", onChange);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
