import { Router } from 'express';
import { listAdminProducts, getAdminProduct, createProduct, updateProduct, deleteProduct } from '../../controllers/admin/productsController.js';
import { createProductRules, updateProductRules, getProductsQueryRules } from '../../validators/productValidators.js';
import { runValidation } from '../../middleware/validate.js';
import { auth, requireRole } from '../../middleware/auth.js';

const router = Router();

router.use(auth, requireRole('admin'));

router.get('/', getProductsQueryRules, runValidation, listAdminProducts);
router.get('/:id', getAdminProduct);
router.post('/', createProductRules, runValidation, createProduct);
router.put('/:id', updateProductRules, runValidation, updateProduct);
router.delete('/:id', deleteProduct);

export default router;
