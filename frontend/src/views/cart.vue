<template>
	<section class="cart">
		<cards-list />
	</section>
</template>

<script>
	import cardsList from '../components/cards-list.vue';

	export default {
		name: 'cart',
		components: {
			cardsList,
		},
	};
</script>
