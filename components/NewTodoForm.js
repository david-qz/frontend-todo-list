export default function createNewTodoForm(form, { handleNewTodo }) {
    form.addEventListener('submit', async e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        await handleNewTodo(formData.get('task'));
    });

    return () => {};
}
