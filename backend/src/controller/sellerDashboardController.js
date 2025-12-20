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
  res.send('Deleting....');
};
