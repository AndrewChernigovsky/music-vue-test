<template>
	<div class="cart">
		<div class="cart__tracks">
			<h2>Избранные треки</h2>
			<ul class="cart__list">
				<li class="cart__audio" v-for="(track, index) in this.store.state.favourite"
					:key="index + track.trackId">
					<img class="cart__poster" :src="track.poster" alt="" width="150" height="150">
					<div class="cart__track">
						<p>{{ track.name }}</p>
						<audio :src="track.src" controls></audio>
					</div>
					<ButtonAddTrack :add="false" />
				</li>
			</ul>
		</div>
		<div class="cart__albums">
			<h2>Избранные альбомы</h2>
			<ul class="cart__list">
				<li class="cart__audio" v-for="(track, index) in this.store.state.favourite"
					:key="index + track.trackId">
					<img class="cart__poster" :src="track.poster" alt="" width="150" height="150">
					<div class="cart__track">
						<p>{{ track.album }}</p>
						<p>Исполнитель: {{ track.band }} <br /> Выпуск Альбома: {{ track.publish }} г.</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import ButtonAddTrack from "./../../interface/Buttons/ButtonAddTrack/ButtonAddTrack";
export default {
	name: "Cart",
	components: {
		ButtonAddTrack
	},

	setup() {
		const store = useStore();

		return {
			store
		}
	}
}
</script>

<style lang="scss">
@import "./Cart";
</style>