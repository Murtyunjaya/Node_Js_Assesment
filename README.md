#  Node_Js_Assesment

 Node_Js_Assesment is a Node.js application for user and admin management, including product management and order processing.

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (v4 or higher)
- [Git](https://git-scm.com/)

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/ Node_Js_Assesment.git
    cd myapp
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following variables:
    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/myappdb
    JWT_SECRET=your_jwt_secret_key
    EMAIL=your_email@gmail.com
    EMAIL_PASSWORD=your_email_password
    ADMIN_EMAIL=admin_email@gmail.com
    ```

4. **Start the MongoDB server:**
    Make sure your MongoDB server is running. If you have MongoDB installed locally, you can start it with:
    ```bash
    mongod
    ```

5. **Start the application:**
    ```bash
    node app.js
    ```

6. **Access the API:**
    The server will be running on `http://localhost:3000`.

## API Endpoints

- **Register a user/admin**
    - `POST /api/auth/register`
    - Request body:
      ```json
      {
        "name": "John Doe",
        "email": "john@example.com",
        "password": "password123",
        "role": "admin"
      }
      ```

- **Login a user/admin**
    - `POST /api/auth/login`
    - Request body:
      ```json
      {
        "email": "john@example.com",
        "password": "password123"
      }
      ```

- **Add a product (admin only)**
    - `POST /api/product/products`
    - Request header: `Authorization: Bearer <token>`
    - Request body:
      ```json
      {
        "name": "Product 1",
        "description": "Description",
        "price": 100,
        "quantity": 10
      }
      ```

- **Delete a product (admin only)**
    - `DELETE /api/product/products/:id`
    - Request header: `Authorization: Bearer <token>`
    - URL parameter: `id` of the product to delete

- **View all products**
    - `GET /api/product/products`
    - Request header: `Authorization: Bearer <token>`

- **Create an order (authenticated users)**
    - `POST /api/order/orders`
    - Request header: `Authorization: Bearer <token>`
    - Request body:
      ```json
      {
        "items": [
          { "product": "product_id", "quantity": 2 }
        ]
      }
      ```

- **Get orders for the authenticated user**
    - `GET /api/order/orders`
    - Request header: `Authorization: Bearer <token>`

- **Get all orders (admin only)**
    - `GET /api/order/admin/orders`
    - Request header: `Authorization: Bearer <token>`

## Cron Job

A cron job is set up to run every day at 10:00 PM and send an email to the admin with the orders received on that day. The cron job is defined in `cronJob\orderEmail.js` and uses `node-cron` and `nodemailer` for scheduling and sending emails, respectively.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
