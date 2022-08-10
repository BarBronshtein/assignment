<template>
	<section class="cards-list main-layout full">
		<div class="cards-list__inner flex flex-column items-center justify-center">
			<ul class="cards__wrapper clean-list flex items-center justify-between">
				<li v-for="product in products" :key="product.id">
					<product :product="product" />
				</li>
			</ul>
		</div>
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
	};
</script>
