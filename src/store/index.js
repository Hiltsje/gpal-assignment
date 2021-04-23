import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		idCount: 5,
		movies: [
			{
				id: 1,
				title: 'Lucy',
				screeningDate: 'Friday 23-04-2021'
			},
			{
				id: 2,
				title: 'The imitation Game',
				screeningDate: 'Friday 30-04-2021'
			},
			{
				id: 3,
				title: 'Still Alice',
				screeningDate: 'Friday 07-05-2021'
			}, {
				id: 4,
				title: 'The Grand Budapest Hotel',
				screeningDate: 'Friday 14-05-2021'
			}, {
				id: 5,
				title: 'Gravity',
				screeningDate: 'Friday 21-05-2021'
			}
		]
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

				for (var i = 0; i < state.movies.length; i++) {
					if (state.movies[i].id === id) {
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
