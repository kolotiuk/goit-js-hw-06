function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    buttonChangeColor: document.querySelector(".change-color"),
    colorValue: document.querySelector(".color"),
    body: document.body,
};

const onClickColorChange = () => {
    const bodyElementColor = (refs.body.style.backgroundColor =
        getRandomHexColor());
    refs.colorValue.textContent = bodyElementColor;
};

refs.buttonChangeColor.addEventListener("click", onClickColorChange);
