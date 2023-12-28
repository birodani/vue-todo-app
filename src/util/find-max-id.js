export const findMaxId = (todos) => {
    return Math.max(0, ...todos.map((todo) => todo.id))
}
