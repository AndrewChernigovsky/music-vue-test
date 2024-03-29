import { createStore } from "vuex";
import state from "./state.js"
import mutations from "./mutations.js"
import actions from "./actions.js"
import getters from "./getters.js"
import user from "./modules/user/index.js"

const store = createStore({
	state,
	getters,
	mutations,
	actions,
	modules: {
		user
	}
});

export default store;