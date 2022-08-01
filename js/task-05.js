const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

const onInput = () =>
    inputRef.value.trim()
        ? (spanRef.textContent = inputRef.value)
        : (spanRef.textContent = "Anonymous");

inputRef.addEventListener("input", onInput);
