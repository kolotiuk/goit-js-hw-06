const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', () => {
    const inputLength = Number(inputRef.dataset.length);
    const inputValue = inputRef.value.length;

    if (inputValue === inputLength) {
        replaceClasses('valid', 'invalid');
        return;
    }
    replaceClasses('invalid', 'valid');
});

function replaceClasses(valid, invalid) {
    inputRef.classList.add(valid);
    inputRef.classList.remove(invalid);
}
