<template>
	<section class="cart main-layout">
		<title>Your Products</title>
		<cards-list />
	</section>
</template>

<script>
	import headlineTitle from '../components/title.cmp.vue';
	import cardsList from '../components/cards-list.vue';

	export default {
		name: 'cart',
		components: {
			cardsList,
			headlineTitle,
		},
	};
</script>
