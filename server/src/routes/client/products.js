import { Router } from 'express';
import { listClientProducts, getClientProduct, getTypes, getFeatured } from '../../controllers/client/productsController.js';
import { getProductsQueryRules } from '../../validators/productValidators.js';
import { runValidation } from '../../middleware/validate.js';

const router = Router();

router.get('/', getProductsQueryRules, runValidation, listClientProducts);
router.get('/types', getTypes);
router.get('/featured', getFeatured);
router.get('/:id', getClientProduct);

export default router;
