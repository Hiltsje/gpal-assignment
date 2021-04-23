<template>
	<v-row no-gutters>
		<v-col cols="12" offset-sm="1" sm="10" offset-md="2" md="8" offset-lg="4" lg="4" >

			<h1>Step 1: Select movie and screening date</h1>
			<v-form
					ref="form"
					v-model="valid"
					lazy-validation
			>
				<v-select
						v-model="title"
						:items="upcommingTitles"
						:rules="titleRules"
						label="Movie title"
						required
				></v-select>
				<v-text-field
						v-model="screeningDate"
						:counter="10"
						:rules="screeningDateRules"
						label="Screening date"
						required
				></v-text-field>


				<v-btn
						:disabled="!valid"
						color="success"
						class="mr-4"
						@click="validate"
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
		</v-col>
	</v-row>
</template>

<script>

	export default {
		data: () => ({
			valid: true,
			title: null,
			upcommingTitles: [
				'Tulipani!',
				'the Guernsey Literary and Potato Peel Pie Society',
				'Captain Fantastic',
				'Nina Simone',
			],
			titleRules: [
				v => !!v || 'Movie title is required',
			],
			screeningDate: '',
			screeningDateRules: [
				v => !!v || 'Screening date is required' //TODO: add string format validation ##-##-####
			]
		}),

		methods: {
			validate() {
				this.$refs.form.validate()
			},
			reset() {
				this.$refs.form.reset()
			},
			resetValidation() {
				this.$refs.form.resetValidation()
			},
		},
	}
</script>


