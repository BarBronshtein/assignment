const express = require('express');
const {
  requireAuth,
  requireAdmin,
} = require('../../middlewares/requireAuth-middleware');
const { log } = require('../../middlewares/logger-middleware');
const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  removeProduct,
} = require('./product-controller');
const router = express.Router();

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getProducts);
router.get('/:id', getProductById);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', removeProduct);

module.exports = router;
