import { Order } from '../models/Order.js';
import { Cart } from '../models/Cart.js';
import { ok, created, fail } from '../utils/respond.js';

export async function createOrder(req, res) {
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart || cart.products.length === 0) return fail(res, 'Корзина пуста', 'EMPTY_CART', {}, 400);

  const order = await Order.create({
    userId: req.user.id,
    products: cart.products.map(p => ({ productId: p.productId, quantity: p.quantity, priceAtPurchase: p.price })),
    totalPrice: cart.totalPrice,
    status: 'pending'
  });

  cart.products = [];
  cart.totalPrice = 0;
  await cart.save();

  return created(res, order);
}

export async function myOrders(req, res) {
  const items = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
  return ok(res, items);
}

export async function adminOrders(_req, res) {
  const items = await Order.find().sort({ createdAt: -1 });
  return ok(res, items);
}

export async function updateOrderStatus(req, res) {
  const { id } = req.params;
  const { status } = req.body;
  const allowed = ['pending','paid','shipped','delivered','cancelled'];
  if (!allowed.includes(status)) return fail(res, 'Неверный статус', 'VALIDATION_ERROR', { allowed }, 400);
  const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
  if (!order) return fail(res, 'Заказ не найден', 'NOT_FOUND', {}, 404);
  return ok(res, order);
}
