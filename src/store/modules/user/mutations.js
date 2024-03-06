export default {
		setAvatar(state, payload) {
			state.avatar = payload;
			localStorage.setItem("avatar", state.avatar)
		},
}