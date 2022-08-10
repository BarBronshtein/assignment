<template>
	<!-- <app-header /> -->
	<router-view />
</template>

<script>
	// import appHeader from '../components/app-header.vue';
	export default {
		// components: { appHeader },
		name: 'app',
	async	created(){
		await this.$store.dispatch('loadProducts')
			console.log(this.$store.getters.products);
		}
	};
</script>
