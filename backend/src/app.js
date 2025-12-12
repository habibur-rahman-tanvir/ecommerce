import express from 'express';
import sellerAuthRoute from './routes/sellerAuthRoute.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seller/auth', sellerAuthRoute);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(errorHandler);

export default app;
