import { fail } from '../utils/respond.js';

export function notFound(req, res, next) {
  return fail(res, 'Ресурс не найден', 'NOT_FOUND', {}, 404);
}

export function errorHandler(err, req, res, next) {
  console.error('Error:', err);
  const status = err.status || 500;
  const code = err.code || (status === 500 ? 'INTERNAL_SERVER_ERROR' : 'ERROR');
  const message = err.message || 'Внутренняя ошибка сервера';
  return fail(res, message, code, err.details || {}, status);
}
