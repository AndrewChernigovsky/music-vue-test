import { createStore } from "vuex";

const store = createStore({
	state: {
		title: 'Music PlayMarket',
		data: null,
		tracks: [],
		audio: '',
	},
	getters: {
	},
	mutations: {
		getData(state, newData) {
			state.data = newData;
		},
		getAudio(state, newMusic) {
			state.audio = newMusic;
		}
	},
	actions: {
		chooseAudio({ commit }, audio) {
			commit('getAudio', audio)
		}
	}
});

export default store;