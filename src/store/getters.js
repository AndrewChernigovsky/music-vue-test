export default {
	getData: () => {
		return this.getData;
	},
	getFavouritesTracks: (state) => {
		return state.favourite;
	},
	getFavouritesAlbums: (state) => {
		return state.favourite.albums
	}
}