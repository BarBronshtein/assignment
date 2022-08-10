<template>
	<section class="home main-layout">
		<div class="hero img-container full"></div>
		<headline-title class="full">Our Products</headline-title>
		<div class="underline full"></div>
		<cards-list />
	</section>
</template>

<script>
	import cardsList from '../components/cards-list.vue';
	import headlineTitle from '../components/title.cmp.vue';
	export default {
		name: 'home',
		components: {
			cardsList,
			headlineTitle,
		},
	};
</script>

<style></style>
