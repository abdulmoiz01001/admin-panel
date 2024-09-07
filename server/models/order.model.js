const mongoose = require('mongoose');
const { Schema } = mongoose;
const OrderSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'eccomerceUser', required: true }, // Reference to the user who placed the order
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  quantity: { type: Number, required: true }, // Number of products ordered
  price: { type: Number, required: true }, // Price of the order
  totalAmount: { type: Number, required: true }, // Total amount considering quantity and any discounts
  status: {
    type: String,
    enum: ['pending', 'delivered', 'cancelled'],
    default: 'pending', // Order status
  },
  dateOrdered: { type: Date, default: Date.now }, // Date when the order was placed
  dateDelivered: { type: Date }, 
})

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;