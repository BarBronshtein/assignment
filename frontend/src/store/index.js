import { createStore } from 'vuex';
import productStore from './modules/product.store.js';
import cartStore from './modules/cart.store.js';

const store = createStore({
	strict: true,
	modules: {
		productStore,
		cartStore,
	},
});

export default store;
