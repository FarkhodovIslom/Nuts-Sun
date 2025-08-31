import { Router } from 'express';
import { register, login, me } from '../controllers/authController.js';
import { registerRules, loginRules } from '../validators/authValidators.js';
import { runValidation } from '../middleware/validate.js';
import { auth } from '../middleware/auth.js';

const router = Router();

router.post('/register', registerRules, runValidation, register);
router.post('/login', loginRules, runValidation, login);
router.get('/me', auth, me);

export default router;
