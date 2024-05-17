
const express = require('express');
const { addProduct, deleteProduct, viewProducts } = require('../controller/productController');
const auth = require('../middelewares/authMiddleware');
const admin = require('../middelewares/adminMiddeleware');
const router = express.Router();

router.post('/products', auth, admin, addProduct);
router.delete('/products/:id', auth, admin, deleteProduct);
router.get('/products', auth, viewProducts);

module.exports = router;
