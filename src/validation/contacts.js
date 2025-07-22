import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string()
    .pattern(/^\+?[0-9]{10,15}$/)

    .required(),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()

    .valid('work', 'home', 'personal')
    .required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string()
    .pattern(/^\+?[0-9]{10,15}$/)
    .required(),
  email: Joi.string().email().required(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()

    .valid('work', 'home', 'personal')
    .required(),
});

// import Joi from 'joi';

// export const createContactSchema = Joi.object({
//   name: Joi.string().min(3).max(20).required().messages({
//     'string.base': 'Username should be a string',
//     'string.min': 'Username should have at least {#limit} characters',
//     'string.max': 'Username should have at most {#limit} characters',
//     'any.required': 'Username is required',
//   }),
//   phoneNumber: Joi.string().min(5).max(20).required().messages({
//     'string.pattern.base':
//       'Phone number can contain digits, spaces, +, - and () only',
//   }),
//   email: Joi.string()
//     .email({ tlds: { allow: false } })
//     .required()
//     .messages({
//       'string.email': 'Email must be a valid email address',
//     }),
//   isFavourite: Joi.boolean().messages({
//     'boolean.base': 'isFavourite must be true or false',
//   }),
//   contactType: Joi.string()
//     .valid('work', 'home', 'personal')
//     .required()
//     .messages({
//       'any.only': 'contactType must be one of work, home, or personal',
//     }),
// });

// export const updateContactSchema = Joi.object({
//   name: Joi.string().min(3).max(20).messages({
//     'string.base': 'Username should be a string',
//     'string.min': 'Username should have at least {#limit} characters',
//     'string.max': 'Username should have at most {#limit} characters',
//   }),
//   phoneNumber: Joi.string()
//     .pattern(/^[0-9+\-\s()]+$/)
//     .min(5)
//     .max(20)
//     .messages({
//       'string.pattern.base':
//         'Phone number can contain digits, spaces, +, - and () only',
//     }),
//   email: Joi.string()
//     .email({ tlds: { allow: false } })
//     .messages({
//       'string.email': 'Email must be a valid email address',
//     }),
//   isFavourite: Joi.boolean().messages({
//     'boolean.base': 'isFavourite must be true or false',
//   }),
//   contactType: Joi.string().valid('work', 'home', 'personal').messages({
//     'any.only': 'contactType must be one of work, home, or personal',
//   }),
// });
