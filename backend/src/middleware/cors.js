import cors from 'cors';
import AppError from '../error/AppError.js';

const whiteList = [
  undefined,
  'https://localhost:5173',
  'https://ecommerce-wine-kappa-50.vercel.app',
];

const corsMiddleware = cors({
  origin: (origin, callbak) => {
    if (whiteList.length === 0 || whiteList.includes(origin)) {
      callbak(null, true);
    } else {
      console.log('BLOCKED_ORIGIN:', origin);
      callbak(new AppError('Not allowed by CORS'));
    }
  },
  credentials: true,
});

export default corsMiddleware;
