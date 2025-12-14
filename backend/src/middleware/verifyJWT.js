import jwt from 'jsonwebtoken';
import AppError from '../error/AppError.js';

const verifyJWT = (req, res, next) => {
  const secret = process.env.SELLER_JWT_SECRET || 'SELLER_JWT_SECRET';
  if (!secret) {
    throw new AppError('JWT secret is missing in environment variables', 500);
  }

  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    [, token] = req.headers.authorization.split(' ');
  }

  if (!token && req.cookies?.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) throw new AppError('Auth token missing', 401);

  let decoded;
  try {
    decoded = jwt.verify(token, secret);
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      throw new AppError('Token has expired', 401);
    }
    if (err.name === 'JsonWebTokenError') {
      throw new AppError('Invalid token', 401);
    }
    throw new AppError('Could not verify token', 401);
  }

  req.user = {
    id: decoded.id,
    email: decoded.email,
    role: decoded.role,
  };
  next();
};

export default verifyJWT;
