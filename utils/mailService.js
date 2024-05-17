const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const sendOrderSummaryEmail = async (orders) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.ADMIN_EMAIL,
        subject: 'Daily Order Summary',
        text: `Orders received today:\n${JSON.stringify(orders, null, 2)}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendOrderSummaryEmail;
