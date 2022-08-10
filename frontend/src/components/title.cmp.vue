<template>
	<div class="headline-title">
		<div class="title-buffer"></div>
		<div class="main-layout">
			<div class="flex justify-between">
				<span> <slot></slot> </span>
				<span
					>My cart <span>({{ itemsCount }} items)</span></span
				>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'headline-title',
		computed: {
			itemsCount() {
				return this.$store.getters.cartItems?.length || 0;
			},
		},
	};
</script>
