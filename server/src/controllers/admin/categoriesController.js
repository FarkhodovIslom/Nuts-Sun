import { Category } from '../../models/Category.js';
import { ok, created, fail } from '../../utils/respond.js';

export async function listCategories(_req, res) {
  const items = await Category.find().sort({ name: 1 });
  return ok(res, items);
}

export async function createCategory(req, res) {
  const exists = await Category.findOne({ name: req.body.name });
  if (exists) return fail(res, 'Категория уже существует', 'ALREADY_EXISTS', {}, 400);
  const item = await Category.create(req.body);
  return created(res, item);
}

export async function updateCategory(req, res) {
  const item = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!item) return fail(res, 'Категория не найдена', 'NOT_FOUND', {}, 404);
  return ok(res, item);
}

export async function deleteCategory(req, res) {
  const item = await Category.findByIdAndDelete(req.params.id);
  if (!item) return fail(res, 'Категория не найдена', 'NOT_FOUND', {}, 404);
  return ok(res, { deleted: true });
}
