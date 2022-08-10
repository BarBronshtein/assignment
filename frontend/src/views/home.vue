<template>
	<section class="home">
		<cards-list />
	</section>
</template>

<script>
	import cardsList from '../components/cards-list.vue';

	export default {
		name: 'home',
		components: {
			cardsList,
		},
	};
</script>

<style></style>
