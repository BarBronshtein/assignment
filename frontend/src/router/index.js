import { createRouter, createWebHashHistory } from 'vue-router';
import home from '../views/home.vue';
import cart from '../views/cart.vue';
const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: home,
		},
		{
			path: '/cart',
			name: 'cart',
			component: cart,
		},
	],
});

export default router;
