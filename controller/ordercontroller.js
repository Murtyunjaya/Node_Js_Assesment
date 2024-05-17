const Order = require('../models/orderModel');
const Product = require('../models/productModel');

exports.createOrder = async (req, res) => {
    const { items } = req.body;
    const userId = req.user.id;
    try {
        let total = 0;
        for (const item of items) {
            const product = await Product.findById(item.product);
            if (!product) {
                return res.status(404).json({ error: `Product with ID ${item.product} not found` });
            }
            total += product.price * item.quantity;
        }

        const order = new Order({ user: userId, items, total });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).populate('items.product');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('items.product').populate('user');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
