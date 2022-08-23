// Imports
import UserService from '../services/UserService.js';
import createNewTodoForm from '../components/NewTodoForm.js';

// Handlers
async function handlePageLoad() {
    const user = await UserService.getUser();
    if (!user) {
        location.replace('/');
        return;
    }

    display();
}

async function handleNewTodo(task) {
    // TODO: implement this
    console.log(task);
}

// Components
const NewTodoForm = createNewTodoForm(document.querySelector('#new-todo-form'), {
    handleNewTodo
});

function display() {
    NewTodoForm();
}

handlePageLoad();
