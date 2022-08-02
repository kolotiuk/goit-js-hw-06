const formRef = document.querySelector(".login-form");

const onForm = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    if (!email.value.trim() || !password.value.trim()) {
        alert("все поля должны быть заполнены");
        return;
    }

    const obj = {
        email: email.value,
        password: password.value,
    };
    console.log("~ obj", obj);

    e.target.reset();
};

formRef.addEventListener("submit", onForm);
