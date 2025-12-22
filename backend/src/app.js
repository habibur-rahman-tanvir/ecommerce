import express from 'express';
import cookieParser from 'cookie-parser';
import sellerAuthRoute from './routes/sellerAuthRoute.js';
import sellerProfileRoute from './routes/sellerProfileRoute.js';
import sellerDashboardRoute from './routes/sellerDashboardRoute.js';
import errorHandler from './middleware/errorHandler.js';
import corsMiddleware from './middleware/cors.js';
import verifyJWT from './middleware/verifyJWT.js';

const app = express();
app.set('trust proxy', 1);

app.use(cookieParser());
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seller/auth', sellerAuthRoute);
app.use('/api/seller/profile', verifyJWT, sellerProfileRoute);
app.use('/api/seller/dashboard', verifyJWT, sellerDashboardRoute);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(errorHandler);

export default app;
