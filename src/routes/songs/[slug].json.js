import songs from './_songs.js';

const lookup = new Map();
songs.forEach(song => {
	lookup.set(song.slug, song);
});

export function get({ params }) {
	const { slug } = params;
	if (lookup.has(slug)) {
		return {
			body: lookup.get(slug),
			headers: {
				'Content-Type': 'application/json'
			}
		};
	} else {
		return {
			body: JSON.stringify({ message: `Not found` }),
			headers: {
				'Content-Type': 'application/json'
			}
		}
	}
}