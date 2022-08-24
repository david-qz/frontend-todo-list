// Imports
import UserService from '../services/UserService.js';
import TodoService from '../services/TodoService.js';
import createNewTodoForm from '../components/NewTodoForm.js';
import createTodoList from '../components/TodoList.js';

// State
let todos = [];

// Handlers
async function handlePageLoad() {
    const user = await UserService.getUser();
    if (!user) {
        location.replace('/');
        return;
    }

    todos = await TodoService.getTodos();

    display();
}

async function handleNewTodo(task) {
    const todo = await TodoService.addTodo(task);
    todos.push(todo);
    display();
}

async function handleTodoToggleCompleted(todoId) {
    const index = todos.findIndex(x => x.id === todoId);
    const todo = todos[index];

    const updatedTodo = await TodoService.updateTodo(todoId, { completed: !todo.completed });
    todos.splice(index, 1, updatedTodo);
    display();
}

async function handleDeleteTodo(todoId) {
    const index = todos.findIndex(x => x.id === todoId);
    await TodoService.deleteTodo(todoId);
    todos.splice(index, 1);
    display();
}

// Components
const NewTodoForm = createNewTodoForm(document.querySelector('#new-todo-form'), {
    handleNewTodo
});

const TodoList = createTodoList(document.querySelector('#todo-list'), {
    handleTodoToggleCompleted,
    handleDeleteTodo
});

function display() {
    NewTodoForm();
    TodoList(todos);
}

handlePageLoad();
