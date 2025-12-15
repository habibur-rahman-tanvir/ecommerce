import mongoose, { Schema } from 'mongoose';
import Product from './productModel.js';

const cartSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'Customer',
    },
    items: [Product],
  },
  {
    timestamps: true,
  },
);

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
