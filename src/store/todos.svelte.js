export let todos = $state({
  list: [
    // { title: 'Learn Svelte', completed: false, id: 1 },
    // { title: 'Learn Vite', completed: false, id: 2 },
  ],
});

export function removeTodo(todoId) {
  todos.list = todos.list.filter((todo) => todo.id !== todoId);
  // const todoIdx = todos.findIndex((todo) => todo.id !== todoId);
  // todos.splice(todoIdx, 1);
}

export function addTodo(todo) {
  // todos.unshift(todo);
  todos.list.unshift(todo);
}
