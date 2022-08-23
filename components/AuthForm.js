export default function createAuthForm(form, { submitHandler }) {
    const errorMessage = form.querySelector('.error-message');

    form.addEventListener('submit', async e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const error = await submitHandler(formData.get('email'), formData.get('password'));
        if (error) {
            setErrorMessage(error);
        } else {
            clearErrorMessage();
        }
    });

    function setErrorMessage(error) {
        errorMessage.textContent = error;
    }

    function clearErrorMessage() {
        errorMessage.textContent = '';
    }

    return () => {};
}
