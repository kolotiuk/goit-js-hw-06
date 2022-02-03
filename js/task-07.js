const inputRange = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

inputRange.oninput = () => {
    text.style.fontSize = inputRange.value + "px";
};
