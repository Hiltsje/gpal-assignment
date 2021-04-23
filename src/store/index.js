import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		idCount: 1,
		movies: [{
			id: 1,
			title: 'store title',
			screeningDate: 'store date'
		}]
	},
	mutations: {
		createMovie(state, movieData) {
			let movie = {
				id: state.idCount + 1,
				title: movieData.title,
				screeningDate: movieData.screeningDate
			}
			console.log('store:createeMovie', movie);
			state.movies.push(movie)
			state.idCount++

		},
		deleteMovie(state, id) { //TODO: untested
			console.log('store:deleteMovie', id);

			for(var i = 0; i < state.movies.length; i++) {
				if(state.movies[i].id === id) {
					state.movies.splice(i, 1);
					console.log('store: state.movies[i]', state.movies[i]);
					break;
				}
			}
		},

	},
	actions: {},
	modules: {}
})
