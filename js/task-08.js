const login = document.querySelector(".login-form");

const onSubmit = (event) => {
    event.preventDefault();

    const inputEmail = event.target.elements.email;
    const inputPassword = event.target.elements.password;

    if (inputEmail.value.trim() || inputPassword.value.trim()) {
        const formData = {
            email: inputEmail.value,
            password: inputPassword.value,
        };
        console.log(formData);
        login.reset();
        return;
    }

    alert("Все поля должны быть заполнены.");
};

login.addEventListener("submit", onSubmit);
