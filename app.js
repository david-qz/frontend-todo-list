// Services
import UserService from './services/UserService.js';

// Components
import createAuthForm from './components/AuthForm.js';

createAuthForm(document.querySelector('#sign-up-form'), {
    submitHandler: handleSignUp
});

async function handleSignUp(email, password) {
    const response = await UserService.signUp({ email, password });

    if (response.ok) {
        location.replace('/todos');
    } else {
        return (await response.json()).message;
    }
}
