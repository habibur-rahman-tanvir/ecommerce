import cors from 'cors';
import AppError from '../error/AppError.js';
import { WHITE_LIST } from '../config/config.js';

const corsMiddleware = cors({
  origin: (origin, callback) => {
    if (WHITE_LIST.length === 0 || WHITE_LIST.includes(origin)) {
      callback(null, true);
    } else {
      console.log('BLOCKED_ORIGIN:', origin);
      callback(new AppError('Not allowed by CORS'));
    }
  },
  credentials: true,
});

export default corsMiddleware;
