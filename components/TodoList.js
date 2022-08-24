export default function createTodoList(ul, handlers) {
    return (todos) => {
        ul.innerHTML = '';

        for (const todo of todos) {
            ul.append(createTodo(todo, handlers));
        }
    };
}

function createTodo(todo, { handleTodoToggleCompleted, handleDeleteTodo }) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = todo.task;
    if (todo.completed) span.classList.add('completed');
    span.addEventListener('click', () => {
        handleTodoToggleCompleted(todo.id);
    });

    const icon = document.createElement('i');
    icon.classList.add('delete-button', 'fa-solid', 'fa-trash');
    icon.addEventListener('click', () => {
        handleDeleteTodo(todo.id);
    });

    li.append(span, icon);
    return li;
}
