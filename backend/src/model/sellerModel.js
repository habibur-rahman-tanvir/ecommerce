import { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import User from './userModel.js';

const sellerSchema = new Schema({
  shopName: {
    type: String,
    required: true,
  },
});

sellerSchema.methods.verifyPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Seller = User.discriminator('seller', sellerSchema);

export default Seller;
