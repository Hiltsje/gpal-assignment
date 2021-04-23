<template>
	<div>
		<v-row no-gutters>
			<v-col cols="12" offset-sm="1" sm="10" offset-md="2" md="8" offset-lg="4" lg="4">
				<h1>Movies</h1>


				<v-row no-gutters>
					<v-col cols="12" sm="6" md="4" lg="4">
						<p>Total movies: {{movies.length}}</p>
					</v-col>
<!--					<v-col cols="12" sm="6" md="4" lg="4">-->
<!--						<p>Selected: {{selected}}</p>-->
<!--					</v-col>-->

				</v-row>

				<v-row no-gutters>
					<v-col cols="12">
						<v-data-table
								v-model="selected"
								:headers="headers"
								:items="movies"
								:single-select="true"
								item-key="id"
								show-select
								class="elevation-1"
						>
						</v-data-table>
					</v-col>
				</v-row>

			</v-col>
		</v-row>
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
					value: 'tid'
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
		}),
		computed: {
			movies() {
				return this.$store.state.movies
			}
		},
		methods: {},
	}
</script>
