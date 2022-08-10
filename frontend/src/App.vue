<template>
	<app-header />
	<router-view />
</template>

<script>
	import appHeader from './components/app-header.vue';
	export default {
		components: { appHeader },
		name: 'app',
		async	created(){
			await this.$store.dispatch('loadProducts')     
		}
	};
</script>
