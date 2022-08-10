const productService = require('./product-service.js');
const logger = require('../../services/logger-service');

// GET LIST
async function getProducts(req, res) {
  try {
    logger.debug('Getting Products');
    const queryParams = req.query;
    const products = await productService.query(queryParams);
    res.json(products);
  } catch (err) {
    logger.error('Failed to get products', err);
    res.status(500).send({ err: 'Failed to get products' });
  }
}

// GET BY ID
async function getProductById(req, res) {
  try {
    const productId = req.params.id;
    const product = await productService.getById(productId);
    res.json(product);
  } catch (err) {
    logger.error('Failed to get product', err);
    res.status(500).send({ err: 'Failed to get product' });
  }
}

// POST (add product)
async function addProduct(req, res) {
  try {
    const product = req.body;
    const addedProduct = await productService.add(product);
    res.json(addedProduct);
  } catch (err) {
    logger.error('Failed to add product', err);
    res.status(500).send({ err: 'Failed to add product' });
  }
}

// PUT (Update product)
async function updateProduct(req, res) {
  try {
    const product = req.body;
    const updatedProduct = await productService.update(product);
    res.json(updatedProduct);
  } catch (err) {
    logger.error('Failed to update product', err);
    res.status(500).send({ err: 'Failed to update product' });
  }
}

// DELETE (Remove product)
async function removeProduct(req, res) {
  try {
    const productId = req.params.id;
    await productService.remove(productId);
    res.send('Removed');
  } catch (err) {
    logger.error('Failed to remove product', err);
    res.status(500).send({ err: 'Failed to remove product' });
  }
}

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  removeProduct,
};
