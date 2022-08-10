<template>
	<section class="home main-layout">
		<img src="" class="full" />
		<title class="full">Our Products</title>
		<div class="underline full"></div>
		<cards-list />
	</section>
</template>

<script>
	import cardsList from '../components/cards-list.vue';
	import title from '../components/title.cmp.vue';
	export default {
		name: 'home',
		components: {
			cardsList,
			title,
		},
	};
</script>

<style></style>
