<template>
	<section class="cart main-layout">
		<title>Your Products</title>
		<cards-list />
	</section>
</template>

<script>
	import title from '../components/title.cmp.vue';
	import cardsList from '../components/cards-list.vue';

	export default {
		name: 'cart',
		computed:{
			cartItems(){
				return this.$store.getters.cartItems
			},
		},
		components: {
			cardsList,
			title,
		},
	};
</script>
