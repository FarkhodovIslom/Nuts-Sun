import { Product } from '../../models/Product.js';
import { ok, created, fail } from '../../utils/respond.js';

export async function listAdminProducts(req, res) {
  const { page = 1, limit = 10, type, search, sort } = req.query;
  const q = {};
  if (type) q.type = type;
  if (search) q.name = { $regex: search, $options: 'i' };

  let sortObj = { createdAt: -1 };
  if (sort === 'price_asc') sortObj = { price: 1 };
  if (sort === 'price_desc') sortObj = { price: -1 };

  const [items, total] = await Promise.all([
    Product.find(q).sort(sortObj).skip((page - 1) * limit).limit(Number(limit)),
    Product.countDocuments(q)
  ]);

  return ok(res, {
    products: items,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      pages: Math.ceil(total / limit) || 1
    }
  });
}

export async function getAdminProduct(req, res) {
  const item = await Product.findById(req.params.id);
  if (!item) return fail(res, 'Продукт не найден', 'NOT_FOUND', {}, 404);
  return ok(res, item);
}

export async function createProduct(req, res) {
  const product = await Product.create(req.body);
  return created(res, product);
}

export async function updateProduct(req, res) {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!product) return fail(res, 'Продукт не найден', 'NOT_FOUND', {}, 404);
  return ok(res, product);
}

export async function deleteProduct(req, res) {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return fail(res, 'Продукт не найден', 'NOT_FOUND', {}, 404);
  return ok(res, { deleted: true });
}
