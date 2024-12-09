<script>
  import { todos, removeTodo } from '../store/todos.svelte';
  import NewTodo from './NewTodo.svelte';
  import Todo from './Todo.svelte';

  // let todos = $state([
  //   { title: 'Learn Svelte', completed: false, id: 1 },
  //   { title: 'Learn Vite', completed: false, id: 2 },
  // ]);

  // function removeTodo(todoId) {
  //   const todoIdx = todos.findIndex((todo) => todo.id !== todoId);
  //   todos.splice(todoIdx, 1);
  // }

  // $effect(() => {
  //   console.log(todos)
  // })

  const len = $derived(todos.list.length);

  async function getTodos() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=5',
    );
    const data = await res.json();
    todos.list.push(...data);
  }
</script>

<h1>Todos</h1>

<NewTodo />

{#await getTodos()}
  <p>Loading...</p>
{:then}
  {#if len === 0}
    <p>No todos</p>
  {:else}
    <div class="todos">
      {#each todos.list as todo (todo.id)}
        <Todo {...todo} {removeTodo} />
      {/each}
    </div>
  {/if}
{:catch error}
  <p>{error.message}</p>
{/await}

<h2>Total: {len}</h2>

<style>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
</style>
