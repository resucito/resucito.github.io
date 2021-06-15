<script>
	let query = '';
</script>

<form>
	<input class="search-input" bind:value={query} placeholder="Search song titles or categories" />
	<button>Search</button>
</form>

{#if query}
	<p>Search results for <span class="search-query">{query || 'N/A'}</span></p>
{/if}

<style>
	button {
		font-family: inherit;
		font-size: inherit;
		background-color: rgba(255, 62, 0, 0.2);
	}

	button:focus,
	button:hover {
		border: 3px solid #ff3e00;
	}

	.search-input {
		font-family: inherit;
		font-size: inherit;
		width: 50vw;
	}

	.search-query {
		color: #ff3e00;
	}
</style>
