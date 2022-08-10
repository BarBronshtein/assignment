<template>
	<section class="cart main-layout">
		<h1>Your Cart</h1>
		<headline-title class="full">Your Products</headline-title>
		<cards-list :products="cartProducts" :disable="true" />
	</section>
</template>

<script>
	import headlineTitle from '../components/title.cmp.vue';
	import cardsList from '../components/cards-list.vue';

	export default {
		name: 'cart',
		computed: {
			cartProducts() {
				return this.$store.getters.cartItems.map(item => item.product);
			},
		},
		components: {
			cardsList,
			headlineTitle,
		},
	};
</script>
