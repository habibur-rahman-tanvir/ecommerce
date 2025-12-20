import express from 'express';
import roles from '../middleware/roleHandler.js';
import {
  addProduct,
  deleteProduct,
} from '../controller/sellerDashboardController.js';

const router = express.Router();
router.use(roles(['seller']));

router.post('/product', addProduct);
router.delete('/product/:id', deleteProduct);

export default router;
