<template>

	<button v-if="add" :class="added ? 'button added ' : 'button buttonAddTrack'" @click="addFavourite" type="button"
		aria-label="Добавить трек в избранное"></button>
	<button v-else class="button added" @click="removeFavourite" type="button"
		aria-label="Удалить трек из избранного" />
</template>

<script>
import { useStore } from "vuex";

export default {
	name: "ButtonAddTrack",
	props: {
		songs: Object,
		album: Object,
		add: Boolean
	},

	setup(props) {
		const store = useStore();
		return { store };
	},
	data() {
		return {
			added: false
		}
	},
	methods: {
		removeFavourite() {
			// this.store.state.favourite.remove()
		},
		addFavourite() {
			let isObj;
			let track = {
				songs: this.songs,
				album: this.album,
				albumId: this.album.id,
				trackId: this.songs.id,
				publish: this.album.publish,
				band: this.album.band,
				added: true
			}
			if (this.store.state.favourite == null) {
				this.store.commit("setFavouriteTrack", track)
			}
			if (this.store.state.favourite !== null) {
				isObj = this.store.state.favourite.some(obj => {
					return obj.trackId === track.trackId;
				})
			}
			if (!isObj) { this.store.commit("setFavouriteTrack", track) }

			this.added = !this.added;
		},
	},
}
</script>

<style lang="scss">
@import "./ButtonAddTrack";
</style>