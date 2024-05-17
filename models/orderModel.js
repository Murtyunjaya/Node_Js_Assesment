const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [
        {
            product: String,
            quantity: Number,
            price: Number,
        },
    ],
    total: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
