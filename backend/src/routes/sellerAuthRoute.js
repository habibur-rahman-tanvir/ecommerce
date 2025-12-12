import express from 'express';
import {
  createSeller,
  loginSeller,
  logoutSeller,
  refreshJwtToken,
} from '../controller/sellerAuthController.js';
import sellerSession from '../config/sellerSession.js';

const router = express.Router();

router.use(sellerSession);

router.post('/signup', createSeller);
router.post('/signin', loginSeller);
router.post('/signout', logoutSeller);
router.post('/refresh', refreshJwtToken);

export default router;
