const cron = require('node-cron');
const Order = require('../models/orderModel');
const sendOrderSummaryEmail = require('../utils/mailService');

cron.schedule('0 22 * * *', async () => {
    try {
        const start = new Date();
        start.setHours(0, 0, 0, 0);
        const end = new Date();
        end.setHours(23, 59, 59, 999);

        const orders = await Order.find({
            createdAt: {
                $gte: start,
                $lt: end,
            },
        }).populate('items.product').populate('user');

        await sendOrderSummaryEmail(orders);
    } catch (error) {
        console.error('Error in cron job:', error);
    }
});
