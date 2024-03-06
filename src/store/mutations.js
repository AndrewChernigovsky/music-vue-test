export default {
	getData: (state, data) => {
		try {
			setTimeout(() => {
				state.data = data;
			}, 200)
		} catch (err) {
			console.log(err);
		}
	},
	getAudio: (state, newMusic) => {
		state.audio = newMusic;
	},
	setFavouriteTrack: (state, track) => {
		if (!state.favourite) {
			state.favourite = [];
		}
		const { songs, album } = track;
		let addTrack = {
			albumId: album.id,
			album: album.album,
			name: songs.name,
			poster: album.poster,
			src: songs.track,
			trackId: songs.id,
			publish: album.publish,
			band: album.band,
			added: true
		};

		state.favourite.push(addTrack)

	},
};