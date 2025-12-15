import mongoose, { Schema } from 'mongoose';

const reviewSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'Customer',
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
    },
    rating: Number,
    comment: String,
  },
  {
    timestamps: true,
  },
);

const Review = mongoose.model('Review', reviewSchema);

export default Review;
