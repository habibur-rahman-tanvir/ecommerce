import express from 'express';
import Seller from '../model/sellerModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const seller = await Seller.findOne({ _id: req.user.id })
    .select('-_id -role shopName email phone')
    .lean();
  res.json({
    shopName: seller.shopName,
    email: seller.email,
    phone: seller.phone,
  });
});

export default router;
