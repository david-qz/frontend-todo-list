export default function createTodoList(ul) {
    return (todos) => {
        ul.innerHTML = '';

        for (const todo of todos) {
            ul.append(createTodo(todo));
        }
    };
}

function createTodo(todo) {
    const li = document.createElement('li');
    li.textContent = todo.task;

    return li;
}
