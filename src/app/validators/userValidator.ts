import * as validator from 'express-validator/check';

export const UserStoreValidator = [
    validator
        .check('name')
        .isString()
        .withMessage('must be a string'),

    validator
        .check('name')
        .not()
        .isEmpty()
        .withMessage('is required'),

    validator
        .check('email')
        .not()
        .isEmpty()
        .withMessage('is required'),

    validator
        .check('email')
        .isEmail()
        .withMessage('must be a valid email'),

    validator
        .check('password')
        .isLength({ min: 4 })
        .withMessage('passwd 4 chars long!'),

    validator
        .check('password')
        .not()
        .isEmpty()
        .withMessage('is required')
];
