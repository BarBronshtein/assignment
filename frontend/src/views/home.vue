<template>
	<section class="home main-layout">
		<img src="" class="full" />
		<div class="title">
			<span class="title-buffer"></span>
			<div class="flex justify-between">
				<span>Our Products</span>
				<span
					>My cart <span>{{ itemsCount }} items</span></span
				>
			</div>
		</div>
		<div class="underline full"></div>
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
		computed: {
			itemsCount() {
				this.$store.getters.items?.length;
			},
		},
	};
</script>

<style></style>
