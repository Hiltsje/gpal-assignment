<template>
	<v-app>
		<v-app-bar
				color="teal lighten-3"
				dark
				app
		>
			<v-tabs fixed-tabs>
				<v-tab to="/movies">Movies</v-tab>
				<v-tab to="/">Add movie</v-tab>
			</v-tabs>
		</v-app-bar>

		<v-main>
			<v-container fluid>
				<router-view/>
			</v-container>
		</v-main>

		<v-footer app>

		</v-footer>
	</v-app>
</template>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

</style>
