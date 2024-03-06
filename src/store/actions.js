export default {
	chooseAudio: ({ commit }, audio) => {
		commit('getAudio', audio)
	},
};