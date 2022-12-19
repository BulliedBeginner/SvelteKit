<script lang="ts">
	import type { PageData } from './$types';
	export let data : PageData
	const { products } = data
</script>

<svelte:head>
	<title>Homepage</title>
</svelte:head>

<p>This is page and data:</p>

{#each products as product}
	<ol>{product.title}</ol>
{/each}