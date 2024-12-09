<script>
  let { id, completed, title, removeTodo } = $props();
</script>

<div class="todo">
  <h2 class:completed>{title}</h2>
  <p>
    <input type="checkbox" bind:checked={completed} />
    {completed ? 'Completed' : 'Not completed'}
  </p>
  <button
    onclick={() => {
      console.log('Deleting...', id);
      removeTodo(id);
    }}
  >
    Delete
  </button>
</div>

<style>
  .todo {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .title {
    color: #333;
  }
  .completed {
    text-decoration: line-through;
  }
</style>
