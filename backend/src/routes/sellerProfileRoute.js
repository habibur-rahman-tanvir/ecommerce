import express from 'express';
import Seller from '../model/sellerModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const seller = await Seller.findOne({ _id: req.user.id })
    .select('-_id shopName')
    .lean();
  res.json(seller);
});

export default router;
