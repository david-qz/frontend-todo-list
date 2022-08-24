const API_BASE = 'http://localhost:7890';

async function getTodos() {
    const response = await fetch(API_BASE + '/api/v1/todos', {
        method: 'Get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    });

    return await response.json();
}

async function addTodo(task) {
    const response = await fetch(API_BASE + '/api/v1/todos', {
        method: 'Post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task, completed: false }),
        credentials: 'include'
    });

    return await response.json();
}

async function updateTodo(todoId, data) {
    const response = await fetch(API_BASE + `/api/v1/todos/${todoId}`, {
        method: 'Put',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'
    });

    return await response.json();
}

async function deleteTodo(todoId) {
    const response = await fetch(API_BASE + `/api/v1/todos/${todoId}`, {
        method: 'Delete',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    });

    return await response.json();
}

export default {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo
};
