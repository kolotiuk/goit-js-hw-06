const rangeRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

const onRange = () => {
    spanRef.style.fontSize = rangeRef.value + "px";
};

rangeRef.addEventListener("input", onRange);
