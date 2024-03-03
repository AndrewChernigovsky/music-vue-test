<template>
	<div class="page-wrapper">
		<Header />
		<Main />
		<Footer />
	</div>
</template>

<script>
import Audios from "./components/Audios/Audios";
import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";
import Footer from "./components/layout/Footer/Footer";
import data from "./../data.json";

export default {
	name: "App",
	components: {
		Audios,
		Header,
		Main,
		Footer
	},

	async mounted() {
		try {
			setTimeout(() => {
				this.data = data;
				this.$store.commit("getData", this.data);
			}, 200)
		} catch (err) {
			console.log(err);
		}
	},
	data() {
		return {
			data: data
		}
	}
};
</script>

<style lang="scss">
@import "styles";
</style>