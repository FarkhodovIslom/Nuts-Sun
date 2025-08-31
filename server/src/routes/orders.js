import { Router } from 'express';
import { createOrder, myOrders, adminOrders, updateOrderStatus } from '../controllers/ordersController.js';
import { auth, requireRole } from '../middleware/auth.js';

const router = Router();

router.post('/', auth, createOrder);
router.get('/', auth, myOrders);
router.get('/admin', auth, requireRole('admin'), adminOrders);
router.put('/admin/:id/status', auth, requireRole('admin'), updateOrderStatus);

export default router;
