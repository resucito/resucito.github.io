<script context="module" lang="ts">
	// export interface Song {
	// 	slug: string;
	// 	spanish_title: string;
	// 	english_title: string;
	// }
	// export interface SongParams {
	// 	params: {
	// 		slug: string;
	// 	},
	// 	query: string;
	// }
	export async function load({ page: { params }, fetch }) {
		const res = await fetch(`${params.slug}.json`);
		const song = await res.json();
		return {
			props: {
				song
			}
		};
	}
</script>

<script>
	export let song;
</script>

<svelte:head>
	<title>{song.spanish_title}</title>
</svelte:head>

<h1>{song.spanish_title}</h1>

<div class="content">
	{song.spanish_title}
	{song.english_title}
</div>
