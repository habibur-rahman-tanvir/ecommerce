import { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import User from './userModel.js';

const sellerSchema = new Schema({
  shopName: {
    type: String,
    required: true,
  },
  phone: String,
  isApproved: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  totalsSales: {
    type: Number,
    default: 0,
  },
});

sellerSchema.methods.verifyPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Seller = User.discriminator('seller', sellerSchema);

export default Seller;
