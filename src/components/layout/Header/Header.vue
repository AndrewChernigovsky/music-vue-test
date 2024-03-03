<template>
	<header class="header">
		<div class="container">
			<nav class="header__nav">
				<ul class="header__nav-list">
					<li class="header__nav-item"><router-link to="/">Главная</router-link></li>
					<li class="header__nav-item"><router-link to="/user">Ваши треки</router-link></li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "Header.scss";
</style>