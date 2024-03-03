<template>
	<h2>{{ item.name }}</h2>
	<ul>
		<li v-for="(album, index) in item.albums" :key="index">
			<h3>{{ album.album }}</h3>
			<img :src="`${album.poster}`" alt="" width="250" height="250">
			<ul>
				<li v-for="(songs) in album.songs" :key="index">
					<p>{{ songs.name }}</p>
					<audio :src="`${songs.track}`" controls></audio>
				</li>
			</ul>
			<p>Год выпуска: {{ album.publish }}</p>
		</li>
	</ul>
</template>

<script>
import { useStore } from "vuex";

export default {
	name: "Audio",
	props: {
		item: Object
	}
};
</script>
