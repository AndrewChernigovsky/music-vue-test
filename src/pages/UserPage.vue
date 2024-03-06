<template>
	<User />
	<Cart />
</template>

<script>
import Cart from "./../components/Cart/Cart";
import User from "./../components/UserProfile/User/User";

export default {
	name: "UserPage",
	components: {
		Cart,
		User
	}
};
</script>

<style lang="scss"></style>