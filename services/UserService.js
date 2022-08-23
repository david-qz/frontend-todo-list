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

async function getUser() {
    const response = await fetch(API_BASE + '/api/v1/users/me', {
        method: 'Get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    });

    if (!response.ok) {
        return null;
    }

    return await response.json();
}

export default {
    signUp,
    signIn,
    getUser
};
