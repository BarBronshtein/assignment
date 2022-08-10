import { productService } from '../../services/product.service.js';

export default {
	state: {
		currCart: [],
	},
	getters: {
		cartItems(state) {
			return state.currCart;
		},
		cartSum(state) {
			return state.currCart.reduce(
				(acc, { product, quantity }) => acc + product.price * quantity,
				0
			);
		},
	},
	mutations: {
		removeProductFromCart(state, { productId }) {
			const idx = state.currCart.findIndex(item => productId === item.product._id);
			state.currCart.splice(idx, 1);
		},
		addProductToCart(state, { product }) {
			const item = state.currCart.find(item => product._id === item.product._id);
			if (!item) state.currCart.unshift({ product, quantity: 1 });
			else item.quantity++;
		},
	},
};
