import songs from './_songs.js';

const body = songs.map(song => {
	return {
		spanish_title: song.spanish_title,
		english_title: song.english_title,
		slug: song.slug
	};
});

export function get() {
	return {
		body: body,
		headers: {
			'Content-Type': 'application/json'
		}
	};
}