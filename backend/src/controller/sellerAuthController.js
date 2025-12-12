import jwt from 'jsonwebtoken';
import Seller from '../model/sellerModel.js';
import AppError from '../error/AppError.js';

export const createSeller = async (req, res) => {
  const { shopName, email, password } = req.body || {};
  const seller = await Seller.create({ shopName, email, password });
  res.status(201).json({
    status: 'success',
    message: 'Seller created sucessfully',
    sellerId: seller._id,
  });
};

export const loginSeller = async (req, res) => {
  const { email, password } = req.body || {};
  const seller = await Seller.findOne({ email });
  if (!seller || !(await seller.verifyPassword(password))) {
    throw new AppError('Invalid email or password', 401);
  }
  req.session.user = {
    id: seller._id,
    email: seller.email,
    role: seller.role,
  };
  res.json({
    status: 'success',
    message: 'Login successfull',
  });
};

export const logoutSeller = async (req, res) => {
  req.session.destroy((err) => {
    if (err) throw new AppError('Signout failed', 500);
    res.clearCookie('connect.sid');
    return res.json({
      status: 'success',
      message: 'Signout successful',
    });
  });
};

export const refreshJwtToken = async (req, res) => {
  if (!req.session.user) {
    throw new AppError('Seller not signed in', 401);
  }
  const secret = process.env.SELLER_JWT_SECRET || 'n3yOH6TbscCVt&~';
  const token = jwt.sign(
    {
      id: `${req.session.user?.id}`,
      email: req.session.user?.email,
      role: `${req.session.user?.role}`,
    },
    secret,
    {
      noTimestamp: true,
      expiresIn: 60 * 15, // valid for 15 minutes
    },
  );
  res.json({
    status: 'success',
    jwt: token,
  });
};
