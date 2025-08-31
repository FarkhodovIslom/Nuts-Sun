import { Router } from 'express';
import { listCategories, createCategory, updateCategory, deleteCategory } from '../../controllers/admin/categoriesController.js';
import { createCategoryRules, updateCategoryRules } from '../../validators/categoryValidators.js';
import { runValidation } from '../../middleware/validate.js';
import { auth, requireRole } from '../../middleware/auth.js';

const router = Router();

router.use(auth, requireRole('admin'));

router.get('/', listCategories);
router.post('/', createCategoryRules, runValidation, createCategory);
router.put('/:id', updateCategoryRules, runValidation, updateCategory);
router.delete('/:id', deleteCategory);

export default router;
