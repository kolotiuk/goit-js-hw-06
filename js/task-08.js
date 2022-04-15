const formRef = document.querySelector('.login-form');
const inputEmail = document.querySelector('[type="email"]');
const inputPass = document.querySelector('[type="password"]');

const onForm = e => {
    e.preventDefault();

    if (!inputEmail.value.trim() || !inputPass.value.trim()) {
        alert('все поля должны быть заполнены');
        return;
    }

    const formEmail = e.target.elements.email.value;
    const formPassword = e.target.elements.password.value;

    const formData = {
        email: formEmail,
        password: formPassword,
    };
    console.log(formData);

    e.target.reset();
};

formRef.addEventListener('submit', onForm);
