<template>
	<ul class="audios">
		<li class="audios__item" v-for="(item, index) in musicsFromData" :key="index">
			<Audio :item="item" />
		</li>
	</ul>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import Audio from "./../Audio/Audio";


export default {
	name: "Audios",
	components: {
		Audio
	},
	props: {
		musicsFromData: Array
	},
	setup() {
		const store = useStore();
		const tracks = computed(() => store.state.tracks);
		const musicsFromData = computed(() => store.state.data);

		return {
			tracks,
			musicsFromData
		}
	},
};
</script>

<style lang="scss">
@import "./Audios.scss"
</style>