import express from 'express';
import {
  createSeller,
  loginSeller,
  logoutSeller,
} from '../controller/sellerAuthController.js';
import sellerSessionMiddleware from '../config/sellerSession.js';

const router = express.Router();

router.use(sellerSessionMiddleware);

router.post('/signup', createSeller);
router.post('/signin', loginSeller);
router.post('/signout', logoutSeller);

export default router;
