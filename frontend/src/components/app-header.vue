<template>
	<header class="app-header main-layout full">
		<section class="app-header__inner flex align-center justify-between">
			<div class="header-nav flex">
				<router-link
					:class="['header-link', link.class]"
					v-for="link in links"
					:key="link.id"
					:to="link.path"
				>
					{{ link.title }}
				</router-link>
			</div>
			<div class="header-cart align-self-center">
				<router-link to="/cart" class="header-cart-link">
					<span class="fa-solid fa-cart-shopping"></span>
					<span>{{ itemsCount }} Item(s)</span>
				</router-link>
				<span class="header-price"> - $ {{ itemsSumPrice }}</span>
			</div>
		</section>
	</header>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				links: [
					{
						id: 'r001',
						title: '',
						path: '/',
						class: 'fa-solid fa-house-chimney',
					},
					{
						id: 'r002',
						title: 'About us',
						path: '/',
						class: '',
					},
					{
						id: 'r003',
						title: 'Contact us',
						path: '/',
						class: '',
					},
				],
			};
		},
		computed: {
			itemsCount() {
				return this.$store.getters.items?.length || 0;
			},
			itemsSumPrice() {
				return this.$store.getters.itemsSum;
			},
		},
	};
</script>

<style></style>
