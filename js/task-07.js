const inputRange = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRange.addEventListener('input', () => {
    spanRef.style.fontSize = inputRange.value + 'px';
});
