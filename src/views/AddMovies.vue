<template>
	<v-row>
		<v-col cols="12" offset-sm="1" sm="10" offset-md="2" md="8" offset-lg="4" lg="4">
			<v-form
					ref="form"
					v-model="valid"
					lazy-validation
					class="mt-6"
			>
				<v-select
						v-model="movie.title"
						:items="upcommingTitles"
						:rules="titleRules"
						label="Movie title"
						required
				></v-select>
				<v-text-field
						v-model="movie.screeningDate"
						:rules="screeningDateRules"
						label="Screening date"
						required
				></v-text-field>

				<v-btn
						:disabled="!valid"
						color="success"
						class="mr-4"
						@click="submitMovie"
				>
					Submit
				</v-btn>
				<v-btn
						color="error"
						class="mr-4"
						@click="reset"
				>
					Reset Form
				</v-btn>
				<v-btn
						color="warning"
						@click="resetValidation"
				>
					Reset Validation
				</v-btn>
			</v-form>
			<v-snackbar
					v-model="snackbar.visible"
					:timeout="2000"
					color="success"
					centered
					light
			> {{ snackbar.text }}
			</v-snackbar>
		</v-col>
	</v-row>
</template>

<script>

	export default {
		data: () => ({
			valid: true,
			movie: {
				title: null,
				screeningDate: null
			},
			upcommingTitles: [
				'Tulipani!',
				'the Guernsey Literary and Potato Peel Pie Society',
				'Captain Fantastic',
				'Nina Simone',
			],
			titleRules: [
				v => !!v || 'Movie title is required'
			],
			screeningDateRules: [
				v => !!v || 'Screening date is required'
			],
			snackbar: {
				text: '',
				visible: false
			}
		}),
		methods: {
			createMovie() {
				this.$store.commit('createMovie', this.movie);
				this.snackbar.text = this.movie.title + ' has been added';
				this.snackbar.visible = true;
			},
			submitMovie() {
				if (this.$refs.form.validate()) {
					this.createMovie();
				}
			},
			validate() {
				this.$refs.form.validate()
			},
			reset() {
				this.$refs.form.reset();
			},
			resetValidation() {
				this.$refs.form.resetValidation()
			},
		},
	}
</script>


