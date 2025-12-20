import cors from 'cors';
import AppError from '../error/AppError.js';

const whiteList = [undefined];

const corsMiddleware = cors({
  origin: (origin, callbak) => {
    if (whiteList.length === 0 || whiteList.includes(origin)) {
      callbak(null, true);
    } else {
      callbak(new AppError('Not allowed by CORS'));
    }
  },
});

export default corsMiddleware;
