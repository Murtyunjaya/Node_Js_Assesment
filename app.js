const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cronJob = require('./cronJob/orderEmail');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/order', require('./routes/orderRoutes'));
app.use('/api/product', require('./routes/productRoutes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    cronJob;
});
