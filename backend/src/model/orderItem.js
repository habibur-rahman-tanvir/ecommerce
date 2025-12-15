import mongoose, { Schema } from 'mongoose';

const orderItemSchema = new Schema({
  order: {
    type: mongoose.Types.ObjectId,
    ref: 'Order',
  },
  product: {
    type: mongoose.Types.ObjectId,
    ref: 'Product',
  },
  quantity: Number,
  price: Number,
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);

export default OrderItem;
