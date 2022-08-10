const dbService = require('../../services/db-service');
const logger = require('../../services/logger-service');
const ObjectId = require('mongodb').ObjectId;

async function query(filterBy) {
	try {
		let products;
		// const sortBy = JSON.parse(filterBy.sortBy);
		const criteria = _buildCriteria(filterBy);
		const collection = await dbService.getCollection('product');
		// if (sortBy?.status) {
		// 	products = await collection
		// 		.find(criteria)
		// 		.sort({ [sortBy.status]: sortBy.state })
		// 		.toArray();
		// } else {
		products = await collection.find().toArray();
		return products;
	} catch (err) {
		logger.error('cannot find products', err);
		throw err;
	}
}

async function getById(productId) {
	try {
		const collection = await dbService.getCollection('product');
		const product = collection.findOne({ _id: ObjectId(productId) });
		return product;
	} catch (err) {
		logger.error(`while finding product ${productId}`, err);
		throw err;
	}
}

async function remove(productId) {
	try {
		const collection = await dbService.getCollection('product');
		await collection.deleteOne({ _id: ObjectId(productId) });
		return productId;
	} catch (err) {
		logger.error(`cannot remove product ${productId}`, err);
		throw err;
	}
}

async function add(product) {
	try {
		// Todo remove _id in the front
		delete product._id;
		const collection = await dbService.getCollection('product');
		await collection.insertOne(product);
		return product;
	} catch (err) {
		logger.error('cannot insert product', err);
		throw err;
	}
}
async function update(product) {
	try {
		const id = ObjectId(product._id);
		delete product._id;
		const collection = await dbService.getCollection('product');
		await collection.updateOne({ _id: id }, { $set: { ...product } });
		product._id = id;
		return product;
	} catch (err) {
		logger.error(`cannot update product ${productId}`, err);
		throw err;
	}
}

module.exports = {
	remove,
	query,
	getById,
	add,
	update,
};

function _buildCriteria(filterBy) {
	const criteria = {};
	if (filterBy.txt) {
		criteria.name = { $regex: filterBy.txt, $options: 'i' };
	}
	// if (filterBy.inStock) {
	//   criteria.inStock = { $eq: true };
	// }
	// if (filterBy.labels?.length > 0) {
	//   criteria.labels = { $all: filterBy.labels };
	// }

	return criteria;
}
