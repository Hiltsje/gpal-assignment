<template>
  <div class="about">
    <h1>{{movies}}</h1>

  </div>
</template>



<script>

	export default {
		data: () => ({

		}),
		computed: {
			movies () {
				return this.$store.state.movies
			}
		},
		methods: {

		},
	}
</script>
