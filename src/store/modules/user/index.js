import state from "./state.js"
import mutations from "./mutations.js"
import actions from "./actions.js"
import getters from "./getters.js"

const user = {
	state,
	getters,
	mutations,
	actions
}

export default { user }