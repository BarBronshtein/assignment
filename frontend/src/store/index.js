import { createStore } from 'vuex';
import productStore from './modules/product.store.js';

const store = createStore({
	strict: true,
	modules: {
		productStore,
	},
});

export default store;
