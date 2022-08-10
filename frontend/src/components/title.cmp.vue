<template>
	<div class="headline-title">
		<span class="title-buffer"></span>
		<div class="flex justify-between">
			<span> <slot></slot> </span>
			<span
				>My cart <span>{{ itemsCount }} items</span></span
			>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'headline-title',
		computed: {
			itemsCount() {
				this.$store.getters.items?.length;
			},
		},
	};
</script>
