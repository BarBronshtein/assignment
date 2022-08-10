<template>
	<div class="icon-card flex flex-column items-center">
		<div class="img-container">
			<img :src="card.iconSrc" alt="" />
		</div>
		<h3>{{ card.title }}</h3>
		<p>{{ card.subTitle }}</p>
	</div>
</template>

<script>
	export default {
		name: 'icon-card',
		props: {
			card: Object,
		},
	};
</script>
