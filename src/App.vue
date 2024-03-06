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
import { useStore } from "vuex";

export default {
	name: "App",
	components: {
		Audios,
		Header,
		Main,
		Footer
	},
	setup() {
		const store = useStore();
		return { store };
	},
	mounted() {
		this.store.commit("getData", this.data);
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
