<template>
	<div class="icon-card flex flex-column items-center">
		<div class="img-container full">
			<img :src="product.src" />
		</div>
		<h3>Price: ${{ product.price }}</h3>
		<p>{{ product.title }}</p>
		<action-btn @click="$emit('addToCart', product)">Add to cart</action-btn>
	</div>
</template>

<script>
	import actionBtn from './action-btn.vue';
	export default {
		name: 'icon-product',
		props: {
			product: Object,
		},
		components: { actionBtn },
	};
</script>
