import jwt from 'jsonwebtoken';
import { fail } from '../utils/respond.js';
import { User } from '../models/User.js';

export async function auth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return fail(res, 'Требуется авторизация', 'UNAUTHORIZED', {}, 401);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).lean();
    if (!user) return fail(res, 'Пользователь не найден', 'UNAUTHORIZED', {}, 401);
    req.user = { id: user._id.toString(), role: user.role, email: user.email, name: user.name };
    next();
  } catch (e) {
    return fail(res, 'Неверный или просроченный токен', 'UNAUTHORIZED', {}, 401);
  }
}

export function requireRole(role) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return fail(res, 'Недостаточно прав', 'FORBIDDEN', {}, 403);
    }
    next();
  };
}
