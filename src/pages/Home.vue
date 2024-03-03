<template>
	<div class="wrapper">
		<h1>{{ $store.state.title }}</h1>
		<Audios />
	</div>
</template>

<script>
import Audios from "./../components/Audios/Audios";

export default {
	name: "Home",
	components: { Audios }
};
</script>

<style lang="scss"></style>