const API_BASE = 'http://localhost:7890';

async function signUp(userInfo) {
    const response = await fetch(API_BASE + '/api/v1/users', {
        method: 'Post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
        credentials: 'include'
    });

    return response;
}

async function signIn(userInfo) {
    const response = await fetch(API_BASE + '/api/v1/users/sessions', {
        method: 'Post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
        credentials: 'include'
    });

    return response;
}

export default {
    signUp,
    signIn
};
