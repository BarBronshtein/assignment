<template>
	<header class="main-header main-layout full">
		<section class="main-header__inner flex items-center justify-between">
			<div class="logo-wrapper flex items-center">
				<img src="../assets/images/logo.svg" alt="" />
			</div>
			<div class="header-nav flex items-center">
				<router-link
					class="header-link"
					v-for="link in links"
					:key="link.id"
					:to="link.path"
				>
					{{ link.title }}
				</router-link>
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
						title: 'features',
						path: '/',
					},
					{
						id: 'r002',
						title: 'team',
						path: '/',
					},
					{
						id: 'r003',
						title: 'sign in',
						path: '/',
					},
				],
			};
		},
		methods: {},
		computed: {},
		created() {},
		components: {},
	};
</script>

<style></style>
