// Imports
import UserService from './services/UserService.js';
import createAuthForm from './components/AuthForm.js';

// Handlers
async function handlePageLoad() {
    const user = await UserService.getUser();
    if (user) {
        location.replace('/todos');
    }
}

async function handleSignUp(email, password) {
    const response = await UserService.signUp({ email, password });

    if (response.ok) {
        location.replace('/todos');
    } else {
        return (await response.json()).message;
    }
}

async function handleSignIn(email, password) {
    const response = await UserService.signIn({ email, password });

    if (response.ok) {
        location.replace('/todos');
    } else {
        return (await response.json()).message;
    }
}

// Components
createAuthForm(document.querySelector('#sign-up-form'), {
    submitHandler: handleSignUp
});

createAuthForm(document.querySelector('#sign-in-form'), {
    submitHandler: handleSignIn
});

handlePageLoad();
