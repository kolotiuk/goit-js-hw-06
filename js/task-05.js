const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', () => {
    if (inputRef.value.trim()) {
        spanRef.textContent = inputRef.value;
        return;
    }

    spanRef.textContent = 'Anonymous';
});
