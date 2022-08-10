import { productService } from '../../services/product.service.js';

export default {
	state: {
		products: [],
		filterBy: {},
		isLoading: false,
	},
	getters: {
		products(state) {
			return state.products;
		},
		isLoading(state) {
			return state.isLoading;
		},
		filterBy(state) {
			return state.filterBy;
		},
	},
	mutations: {
		setProducts(state, { products }) {
			state.products = products;
		},
		setIsLoading(state, { isLoading }) {
			state.isLoading = isLoading;
		},
		removeProduct(state, { id }) {
			const idx = state.products.findIndex(product => product._id === id);
			state.products.splice(idx, 1);
		},
		saveProduct(state, { product }) {
			const idx = state.products.findIndex(
				currProduct => currProduct._id === product._id
			);
			if (idx !== -1) state.products.splice(idx, 1, product);
			else state.products.unshift(product);
		},
		setFilter(state, { filterBy }) {
			state.filterBy = filterBy;
		},
	},
	actions: {
		async loadProducts({ commit, state }) {
			commit({ type: 'setIsLoading', isLoading: true });
			try {
				const products = await productService.query(state.filterBy);
				commit({ type: 'setProducts', products });
			} catch (err) {
				console.error('Cannot Load products', err);
				throw err;
			} finally {
				commit({ type: 'setIsLoading', isLoading: false });
			}
		},
		async saveProduct({ commit }, { product }) {
			try {
				const savedProduct = await productService.save(product);
				commit({ type: 'saveProduct', product: savedProduct });
			} catch (err) {
				console.error('Cannot save product', err);
				throw err;
			}
		},
		async removeProduct({ commit }, { id }) {
			try {
				await productService.remove(id);
				commit({ type: 'removeProduct', id });
			} catch (err) {
				console.error('Cannot remove product', err);
				throw err;
			}
		},
		async getProductById(_, { productId }) {
			try {
				return await productService.getById(productId);
			} catch (err) {
				console.log(err);
			}
		},
		async filter({ commit, dispatch }, { filterBy }) {
			commit({ type: 'setFilter', filterBy });
			await dispatch({ type: 'loadProducts' });
		},
	},
};
