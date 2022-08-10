<template>
	<div class="icon-card flex flex-column items-center">
		<div class="img-container">
			<img :src="product.src" />
		</div>
		<h3>Price:${{ product.price }}</h3>
		<p>{{ product.title }}</p>
		<action-btn>ADD TO CART</action-btn>
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
