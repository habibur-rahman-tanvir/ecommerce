import mongoose, { Schema } from 'mongoose';
import Seller from './sellerModel.js';

const productSchema = new Schema(
  {
    tittle: {
      type: String,
      required: [true, 'Product tittle is required'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
    },
    stock: Number,
    images: {
      type: [String],
      validate: {
        validator: (val) => val.length <= 5,
        message: 'Maximum 5 images are allowed',
      },
    },
    category: String,
    seller: {
      type: mongoose.Types.ObjectId,
      ref: Seller,
    },
  },
  {
    timestamps: true,
  },
);

// productSchema.pre('save', function (next) {
//   if (this.images && this.images.length > 5) {
//     this.images = this.images.slice(0, 5);
//   }
//   next();
// });

const Product = mongoose.model('Product', productSchema);

export default Product;
