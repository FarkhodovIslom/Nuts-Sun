export function ok(res, data = {}, status = 200) {
  return res.status(status).json({ success: true, data });
}

export function created(res, data = {}) {
  return ok(res, data, 201);
}

export function fail(res, message = 'Ошибка', code = 'ERROR', details = {}, status = 400) {
  return res.status(status).json({
    success: false,
    error: { message, code, details }
  });
}
