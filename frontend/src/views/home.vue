<template>
	<section class="home main-layout">
		<div class="hero img-container full"></div>
		<headline-title class="full">Our Products</headline-title>
		<div class="underline full"></div>
		<cards-list @addToCart="addProduct" :products="products" />
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
		computed: {
			products() {
				return this.$store.getters.products;
			},
		},
		methods: {
			addProduct(product) {
				this.$store.commit({ type: 'addProductToCart', product });
			},
		},
	};
</script>

<style></style>
