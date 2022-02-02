const refs = {
    buttonDecrement: document.querySelector('[data-action="decrement"]'),
    value: document.querySelector("#value"),
    buttonIncrement: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

const onDecrement = () => {
    counterValue -= 1;
    refs.value.textContent = counterValue;
};

const onIncrement = () => {
    counterValue += 1;
    refs.value.textContent = counterValue;
};

refs.buttonDecrement.addEventListener("click", onDecrement);
refs.buttonIncrement.addEventListener("click", onIncrement);
