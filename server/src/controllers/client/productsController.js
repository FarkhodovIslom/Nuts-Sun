import { Product } from '../../models/Product.js';
import { ok, fail } from '../../utils/respond.js';

export async function listClientProducts(req, res) {
  const { page = 1, limit = 10, type, search, sort = 'newest', inStock } = req.query;
  const q = {};
  if (typeof inStock !== 'undefined') q.inStock = inStock === 'true' || inStock === true;
  else q.inStock = true;
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

export async function getClientProduct(req, res) {
  const product = await Product.findById(req.params.id);
  if (!product || !product.inStock) return fail(res, 'Продукт не найден', 'NOT_FOUND', {}, 404);
  return ok(res, product);
}

export async function getTypes(_req, res) {
  const types = await Product.distinct('type', { inStock: true });
  return ok(res, types);
}

export async function getFeatured(_req, res) {
  const items = await Product.find({ inStock: true }).sort({ createdAt: -1 }).limit(8);
  return ok(res, items);
}
