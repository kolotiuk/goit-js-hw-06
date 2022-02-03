const input = document.querySelector("#validation-input");

const inputData = Number(input.dataset.length);

input.addEventListener("blur", () => {
    const inputLength = input.value.length;
    if (inputLength !== inputData) {
        replaceClasses("invalid", "valid");
        return;
    }
    replaceClasses("valid", "invalid");
});

const replaceClasses = (classToAdd, classToRemove) => {
    input.classList.remove(classToRemove);
    input.classList.add(classToAdd);
};
