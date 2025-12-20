import AppError from '../error/AppError.js';
import Product from '../model/productModel.js';

export const addProduct = async (req, res) => {
  const product = await Product.create({ ...req.body, seller: req.user.id });
  res.status(201).json({
    status: 'success',
    message: 'Product added successfully',
    productId: product._id,
  });
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findOneAndDelete({
    _id: req.params.id,
    seller: req.user.id,
  });
  if (!product) throw new AppError('Product not found', 404);
  res.status(204).end();
};
