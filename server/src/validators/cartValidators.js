import { body, param } from 'express-validator';

export const addToCartRules = [
  body('productId').isMongoId(),
  body('quantity').isInt({ min: 1 }).toInt()
];

export const updateCartItemRules = [
  param('productId').isMongoId(),
  body('quantity').isInt({ min: 1 }).toInt()
];
