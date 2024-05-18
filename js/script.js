document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const telephoneNumber = document.getElementById('tel');
    const message = document.getElementById('message');

    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    };

    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');

        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    };

    const isValidEmail = email => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    };

    const validateInputs = () => {
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const telephoneNumberValue = telephoneNumber.value.trim();
        const messageValue = message.value.trim();

        let valid = true;

        if (nameValue === '') {
            setError(name, 'Name is required');
            valid = false;
        } else {
            setSuccess(name);
        }

        if (emailValue === '') {
            setError(email, 'Email is required');
            valid = false;
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email address');
            valid = false;
        } else {
            setSuccess(email);
        }

        if (telephoneNumberValue === '') {
            setError(telephoneNumber, 'Telephone number is required');
            valid = false;
        } else if (telephoneNumberValue.length < 10) {
            setError(telephoneNumber, 'Telephone number must be at least 10 characters');
            valid = false;
        } else {
            setSuccess(telephoneNumber);
        }

        if (messageValue === '') {
            setError(message, 'Message is required');
            valid = false;
        } else {
            setSuccess(message);
        }

        if (valid) {
            alert('Form submitted successfully!');
            form.reset();
            document.querySelectorAll('.success').forEach(el => el.classList.remove('success'));
        }
    };
});


document.addEventListener('DOMContentLoaded', () => {
    const numberDisplay = document.getElementById('number');
    let number = 0;

    document.getElementById('increment').addEventListener('click', () => {
        number++;
        updateDisplay();
    });

    document.getElementById('decrement').addEventListener('click', () => {
        number--;
        updateDisplay();
    });

    function updateDisplay() {
        numberDisplay.textContent = number;
    }
});


