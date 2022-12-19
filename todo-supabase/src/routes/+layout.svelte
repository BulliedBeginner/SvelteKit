<script lang="ts">
	import { todos, loadTodo, addTodo } from "../stores/todoStore"
	loadTodo()
</script>
<slot></slot>


<button on:click={() => addTodo("Buy item12", "Buy milk and soda")}>Add item</button>
<div>
	{#each $todos as todo}
		<p>{todo.title} {todo.description}</p>
	{/each}
</div>
