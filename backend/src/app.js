import express from 'express';
import cookieParser from 'cookie-parser';
import sellerAuthRoute from './routes/sellerAuthRoute.js';
import sellerProfileRoute from './routes/sellerProfileRoute.js';
import errorHandler from './middleware/errorHandler.js';
import corsMiddleware from './middleware/cors.js';
import verifyJWT from './middleware/verifyJWT.js';

const app = express();

app.use(corsMiddleware);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seller/auth', sellerAuthRoute);
app.use('/api/seller/profile', verifyJWT, sellerProfileRoute);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(errorHandler);

export default app;
