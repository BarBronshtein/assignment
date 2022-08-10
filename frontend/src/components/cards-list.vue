<template>
	<section class="cards-list main-layout full">
		<ul class="cards-wrapper clean-list flex justify-between">
			<li v-for="product in products" :key="product._id">
				<card @addToCart="addProduct" class="main-layout" :product="product" />
			</li>
		</ul>
	</section>
</template>

<script>
	import card from './card.vue';
	export default {
		name: 'cards-list',
		props: { products: Array },
		components: {
			card,
		},
		methods: {
			addProduct(product) {
				this.$emit('addToCart', product);
			},
		},
	};
</script>
