<template>
	<header class="main-header main-layout full">
		<section class="main-header__inner flex items-center justify-between">
			<div class="header-nav flex items-center">
				<router-link
					:class="['header-link', link.class]"
					v-for="link in links"
					:key="link.id"
					:to="link.path"
				>
					{{ link.title }}
				</router-link>
			</div>
			<div class="header-cart">
				<roter-link to="/cart" class="header-cart-link">
					<span class="header-cart-logo"></span>
					<span>{{ itemsCount }}</span>
				</roter-link>
				<span class="header-price"> - {{ itemsSumPrice }}</span>
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
						class: 'home-logo',
					},
					{
						id: 'r002',
						title: 'team',
						path: '/',
						class: '',
					},
					{
						id: 'r003',
						title: 'sign in',
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
