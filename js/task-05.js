const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (event) => {
    return (refs.output.textContent = event.currentTarget.value
        ? event.currentTarget.value
        : "Anonymous");
});
