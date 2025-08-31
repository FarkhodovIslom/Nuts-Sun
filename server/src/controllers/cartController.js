import { Cart } from '../models/Cart.js';
import { Product } from '../models/Product.js';
import { ok, fail } from '../utils/respond.js';

async function recalc(cart) {
  cart.totalPrice = cart.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  return cart;
}

export async function getCart(req, res) {
  let cart = await Cart.findOne({ userId: req.user.id }).populate('products.productId');
  if (!cart) cart = await Cart.create({ userId: req.user.id, products: [], totalPrice: 0 });
  return ok(res, cart);
}

export async function addToCart(req, res) {
  const { productId, quantity } = req.body;
  const product = await Product.findById(productId);
  if (!product || !product.inStock) return fail(res, 'Товар недоступен', 'NOT_AVAILABLE', {}, 400);

  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) cart = await Cart.create({ userId: req.user.id, products: [], totalPrice: 0 });

  const existing = cart.products.find(p => p.productId.toString() === productId);
  if (existing) {
    existing.quantity += quantity;
    existing.price = product.price; // keep current price
  } else {
    cart.products.push({ productId, quantity, price: product.price });
  }

  await recalc(cart).save();
  cart = await cart.populate('products.productId');
  return ok(res, cart);
}

export async function updateCartItem(req, res) {
  const { quantity } = req.body;
  const { productId } = req.params;
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) return fail(res, 'Корзина пуста', 'EMPTY_CART', {}, 400);

  const item = cart.products.find(p => p.productId.toString() === productId);
  if (!item) return fail(res, 'Товар не в корзине', 'NOT_IN_CART', {}, 404);
  if (quantity <= 0) {
    cart.products = cart.products.filter(p => p.productId.toString() != productId);
  } else {
    item.quantity = quantity;
  }

  await recalc(cart).save();
  cart = await cart.populate('products.productId');
  return ok(res, cart);
}

export async function removeCartItem(req, res) {
  const { productId } = req.params;
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) return fail(res, 'Корзина пуста', 'EMPTY_CART', {}, 400);

  const before = cart.products.length;
  cart.products = cart.products.filter(p => p.productId.toString() !== productId);
  if (before === cart.products.length) return fail(res, 'Товар не в корзине', 'NOT_IN_CART', {}, 404);

  await recalc(cart).save();
  cart = await cart.populate('products.productId');
  return ok(res, cart);
}
