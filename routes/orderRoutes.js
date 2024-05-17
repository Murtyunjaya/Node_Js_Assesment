const express = require('express');
const { createOrder, getUserOrders, getAllOrders } = require('../controller/ordercontroller');
const auth = require('../middelewares/authMiddleware');
const admin = require('../middelewares/adminMiddeleware');
const router = express.Router();

router.post('/orders', auth, createOrder);
router.get('/orders', auth, getUserOrders);
router.get('/admin/orders', auth, admin, getAllOrders);

module.exports = router;
