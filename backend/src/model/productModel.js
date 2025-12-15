import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema(
  {
    tittle: String,
    price: Number,
    stock: Number,
    images: [String],
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
    },
    seller: {
      type: mongoose.Types.ObjectId,
      ref: 'Seller',
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model('Product', productSchema);

export default Product;
