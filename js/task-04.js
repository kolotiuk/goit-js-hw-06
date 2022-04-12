const decr = document.querySelector('[data-action="decrement"]');
const incr = document.querySelector('[data-action="increment"]');
const spanRef = document.querySelector('#value');

let counterValue = 0;

decr.addEventListener('click', () => {
    counterValue -= 1;
    spanRef.textContent = counterValue;
});

incr.addEventListener('click', () => {
    counterValue += 1;
    spanRef.textContent = counterValue;
});
