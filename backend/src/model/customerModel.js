import { Schema } from 'mongoose';
import User from './userModel.js';

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Customer = User.discriminator('customer', customerSchema);

export default Customer;
