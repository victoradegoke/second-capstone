function validatePassword(password, minlength) {
    if (!password) {
        return 'Password is required';
    }
        
    if (password.length < minlength) {
        return "Please enter a password that's at least $(minlength) characters long";
    }

    const hasCapitalLetter = /[A-Z]/g;
    if (!hasCapitalLetter.test(password)) {
        return "Please use at least one capital letter";
    }

    const hasNumber = /\d/g;
    if (!hasNumber.test(password)) {
        return "Please use at least one number";
    }

    return "";
}

function validateEmail(email) {
    if (!email) {
        return "Email is required";
    }

    const isValidEmail = /^\S+@\S+$/g;
    if (!isValidEmail.test(email)) {
        return "Please enter a valid email"
    }

    return "";
}

function handleSignupFormSubmit(e) {
    e.preventDefault();

    const formDataEntries = new FormData(signupForm).entries();
    const { email, password } = object.fromEntries(formDataEntries);

    const emailErrorMessage = validateEmail(email);
    const passwordErrorMessage = validatePassword(password);

    if (!emailErrorMessage) {
        const emailErrorMessageElement = document.querySelector(".email .mb-3");
        emailErrorMessageElement.innerText = emailErrorMessage;
    }

    if (passwordErrorMessage) {
        const passwordErrorMessageElement = document.querySelector(".password .mb-3");
        passwordErrorMessageElement.innerText = passwordErrorMessage;
    }
}

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}