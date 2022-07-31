const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector("#value");

let counterValue = 0;

decrementRef.addEventListener("click", () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
});
incrementRef.addEventListener("click", () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
});
