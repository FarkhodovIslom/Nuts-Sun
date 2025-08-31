import { validationResult } from 'express-validator';
import { fail } from '../utils/respond.js';

export function runValidation(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return fail(res, 'Ошибка валидации', 'VALIDATION_ERROR', errors.array(), 400);
  }
  next();
}
