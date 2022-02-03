const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    value: document.querySelector("#value"),
    incrementBtn: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

const onDecrementBtnClick = () => {
    counterValue -= 1;
    refs.value.textContent = counterValue;
};

const onIncrementBtnClick = () => {
    counterValue += 1;
    refs.value.textContent = counterValue;
};

refs.decrementBtn.addEventListener("click", onDecrementBtnClick);
refs.incrementBtn.addEventListener("click", onIncrementBtnClick);
