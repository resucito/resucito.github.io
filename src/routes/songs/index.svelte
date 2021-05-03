<script context="module">
	export async function load({ page: { params }, fetch }) {
		const res = await fetch(`songs.json`);
		const songs = await res.json();
		return {
			props: {
				songs
			}
		};
	}
</script>

<script>
	export let songs;
</script>

<svelte:head>
	<title>Songs</title>
</svelte:head>

<h1>Songs</h1>

<ul>
	{#each songs as song}
		<li><a rel="prefetch" href="songs/{song.slug}">{song.spanish_title}</a></li>
	{/each}
</ul>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>
