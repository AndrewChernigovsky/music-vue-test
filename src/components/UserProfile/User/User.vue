<template>
	<div class="user">
		<div class="user__avatar">
			<img :src="avatarImage" alt="аватар пользователя"
				width="100"
				height="100">
			<input type="file" class="user__upload" accept="image/*" ref="upload" @change="uploadAvatar">
		</div>
		<p>
			<span class="user__name">Изосимов </span>
			<span class="user__surname">Андрей</span>
		</p>
	</div>
</template>

<script>
import { ref } from "vue";
import { useStore, mapGetters } from "vuex";

export default {
	name: "User",
	setup() {
		const store = useStore();
		return { store };
	},
	data() {
		return {
			avatarImage: ''
		}
	},
	computed: {
	},
	mounted() {
		if (localStorage.avatar) {
			this.avatarImage = localStorage.avatar;
		} else {
			this.avatarImage = this.store.getters.getAvatar;
		}
	},
	watch: {
		newAvatar(newAvatarImage) {
			localStorage.avatar = newAvatarImage;
		},
	},
	methods: {
		newAvatar(newAvatarImage) {
			localStorage.avatar = newAvatarImage;
		},
		uploadAvatar(event) {
			const file = event.target.files[0];
			this.imageName = file.name;
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				this.avatarImage = reader.result;
				this.newAvatar(this.avatarImage);
			};
			reader.onerror = (error) => {
				console.log('Error: ', error);
			};
		},
	},
};

</script>

<style lang="scss">
@import "./User";
</style>
