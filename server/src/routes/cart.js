import { Router } from 'express';
import { getCart, addToCart, updateCartItem, removeCartItem } from '../controllers/cartController.js';
import { addToCartRules, updateCartItemRules } from '../validators/cartValidators.js';
import { runValidation } from '../middleware/validate.js';
import { auth } from '../middleware/auth.js';

const router = Router();

router.use(auth);

router.get('/', getCart);
router.post('/add', addToCartRules, runValidation, addToCart);
router.put('/update/:productId', updateCartItemRules, runValidation, updateCartItem);
router.delete('/remove/:productId', removeCartItem);

export default router;
