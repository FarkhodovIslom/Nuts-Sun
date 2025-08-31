import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { created, ok, fail } from '../utils/respond.js';

function sign(user) {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
}

export async function register(req, res) {
  const { name, email, password } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return fail(res, 'Email уже зарегистрирован', 'EMAIL_EXISTS', {}, 400);
  const user = await User.create({ name, email, password });
  const token = sign(user);
  return created(res, { token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return fail(res, 'Неверные учетные данные', 'INVALID_CREDENTIALS', {}, 401);
  const okPass = await user.comparePassword(password);
  if (!okPass) return fail(res, 'Неверные учетные данные', 'INVALID_CREDENTIALS', {}, 401);
  const token = sign(user);
  return ok(res, { token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
}

export async function me(req, res) {
  return ok(res, { user: req.user });
}
