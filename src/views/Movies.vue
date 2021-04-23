<template>
	<div>
		<v-row no-gutters>
			<v-col cols="12" offset-sm="1" sm="10" offset-md="2" md="8" offset-lg="4" lg="4">
				<h1>Movies</h1>


				<v-row no-gutters>
					<v-col cols="12" sm="6" md="4" lg="4">
						<p>Total movies: {{movies.length}}</p>
					</v-col>
					<v-col cols="12" sm="6" md="4" lg="4">
						<p>Average title length: {{averageTitleLength}}</p>
					</v-col>
				</v-row>

				<v-row no-gutters>
					<v-col cols="12">
						<v-data-table
								v-model="selected"
								:headers="headers"
								:items="movies"
								:single-select="false"
								item-key="id"
								:items-per-page="5"
								show-select
								class="elevation-1"
						>
						</v-data-table>

						<v-btn
								:disabled="!selected.length"
								color="error"
								class="mr-4 mt-4"
								@click="deleteMovies"
						>
							Delete selected movies
						</v-btn>
					</v-col>
				</v-row>

			</v-col>
		</v-row>
		<v-snackbar
				v-model="snackbar.visible"
				:timeout="2000"
				color="success"
				top
				light
		> {{ snackbar.text }}
		</v-snackbar>
	</div>
</template>


<script>
	export default {
		data: () => ({
			selected: [],
			headers: [
				{
					text: '#',
					align: 'start',
					sortable: true,
					value: 'id'
				},
				{
					text: 'Title',
					align: 'start',
					sortable: true,
					value: 'title'
				},
				{
					text: 'Screening date',
					align: 'start',
					sortable: true,
					value: 'screeningDate'
				}
			],
			snackbar: {
				text: '',
				visible: false
			},
			movieTitles: []

		}),
		mounted() {
			this.setMovieTitleArray();
		},
		watch: {
			movies: {
				deep: true,
				handler() {
					this.setMovieTitleArray();
				}
			}
		},
		computed: {
			movies() {
				return this.$store.state.movies
			},
			averageTitleLength() {
				return Math.round(this.movieTitles.join('').length / this.movieTitles.length);
			},
		},
		methods: {
			deleteMovies() {
				this.$store.commit('deleteMovies', this.selected)
				this.snackbar.text = 'Movie(s) have been successfully deleted';
				this.snackbar.visible = true;
				this.selected = [];
			},
			setMovieTitleArray() {
				this.movieTitles = [];
				this.movies.forEach(movie =>
					this.movieTitles.push(movie.title)
				);
			}
		},
	}
</script>
