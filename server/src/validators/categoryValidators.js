import { body, param } from 'express-validator';

export const createCategoryRules = [
  body('name').isString().isLength({ min: 2 }),
  body('description').optional().isString()
];

export const updateCategoryRules = [
  param('id').isMongoId(),
  body('name').optional().isString().isLength({ min: 2 }),
  body('description').optional().isString()
];
