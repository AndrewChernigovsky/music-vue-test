<template>
	<h2>{{ item.name }}</h2>
	<ul class="audio">
		<li v-for="(album, index) in  item.albums " :key="index + album.album">
			<h3>{{ album.album }}</h3>
			<div class="audio__poster"> <img :src="`${album.poster}`" alt="" width="250" height="250"></div>

			<ul class="audio__list">
				<li class="audio__item" v-for="(songs) in  album.songs " :key="index + songs.name">
					<p>{{ songs.name }}</p>
					<div class="audio__track">
						<audio :src="`${songs.track}`" controls></audio>
						<ButtonAddTrack :songs="songs" :album="album" :add="true" />
					</div>
				</li>
			</ul>
			<p>Год выпуска: {{ album.publish }}</p>
		</li>
	</ul>
</template>

<script>
import ButtonAddTrack from "./../../interface/Buttons/ButtonAddTrack/ButtonAddTrack";

export default {
	name: "Audio",
	components: {
		ButtonAddTrack
	},
	props: {
		item: Object
	}
};
</script>

<style lang="scss">
@import "./Audio.scss"
</style>
