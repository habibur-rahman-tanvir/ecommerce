import session from 'express-session';
import MongoStore from 'connect-mongo';
import 'dotenv/config';

const mongoStore = MongoStore.create({
  mongoUrl: process.env.DATABASE_URI,
  autoRemove: 'native',
  collectionName: 'seller-session',
});

const sellerSessionMiddleware = session({
  secret: process.env.SELLER_SEEION_SECRET || 'jFspOUugEV',
  store: mongoStore,
  resave: false,
  saveUninitialized: false,
  rolling: true,
  cookie: {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  },
});

export default sellerSessionMiddleware;
