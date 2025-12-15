import mongoose, { Schema } from 'mongoose';
import Product from './productModel.js';

const orderSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'Customer',
    },
    items: [Product],
    totallAmount: Number,
    paymentStatus: Boolean,
    orderStatus: {
      type: String,
      enum: ['pending', 'processing', 'delevered'],
    },
    shippingAddress: String,
    seller: {
      type: mongoose.Types.ObjectId,
      ref: 'Seller',
    },
  },
  {
    timestamps: true,
  },
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
