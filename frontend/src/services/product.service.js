import { httpService } from './http.service';

export const productService = {
	query,
	getById,
	remove,
	save,
	getEmptyProduct,
};

async function query(filterBy = {}) {
	try {
		return await httpService.get('product', { params: filterBy });
	} catch (err) {
		console.log('Cannot get products', err);
	}
}

async function getById(productId) {
	try {
		return await httpService.get(`product/${productId}`);
	} catch (err) {
		console.log('Cannot get the product', err);
	}
}
async function remove(productId) {
	await httpService.delete(`product/${productId}`);
}

async function save(product, activity = null) {
	try {
		if (product._id) {
			activity && product.activities.unshift(activity);
			return await httpService.put(`product/${product._id}`, product);
		} else return await httpService.post('product', product);
	} catch {
		console.log('cannot save product');
	}
}

function getEmptyProduct(title) {
	return {};
}
