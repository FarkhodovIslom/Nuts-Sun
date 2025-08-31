import { body, param, query } from 'express-validator';

export const createProductRules = [
  body('name').isString().isLength({ min: 2 }).withMessage('name min 2'),
  body('type').isString().isIn(['орехи','сухофрукты','семечки','цукаты','смеси']).withMessage('invalid type'),
  body('price').isFloat({ gt: 0 }),
  body('weight').optional().isFloat({ gt: 0 }),
  body('image').optional().isURL().withMessage('image must be valid URL')
];

export const updateProductRules = [
  param('id').isMongoId(),
  body('name').optional().isString().isLength({ min: 2 }),
  body('type').optional().isString().isIn(['орехи','сухофрукты','семечки','цукаты','смеси']),
  body('price').optional().isFloat({ gt: 0 }),
  body('weight').optional().isFloat({ gt: 0 }),
  body('image').optional().isURL(),
  body('inStock').optional().isBoolean().toBoolean()
];

export const getProductsQueryRules = [
  query('page').optional().isInt({ min: 1 }).toInt(),
  query('limit').optional().isInt({ min: 1, max: 100 }).toInt(),
  query('type').optional().isString(),
  query('search').optional().isString(),
  query('sort').optional().isString().isIn(['price_asc','price_desc','newest']),
  query('inStock').optional().isBoolean().toBoolean()
];
