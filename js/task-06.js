const inputRef = document.querySelector("#validation-input");

const onInput = () => {
    const inputValueLength = inputRef.value.length;
    const inputDataLength = Number(inputRef.dataset.length);
    if (inputValueLength === inputDataLength) {
        verification("valid", "invalid");
        return;
    }
    verification("invalid", "valid");
};

inputRef.addEventListener("blur", onInput);

const verification = (valid, invalid) => {
    inputRef.classList.add(valid);
    inputRef.classList.remove(invalid);
};
