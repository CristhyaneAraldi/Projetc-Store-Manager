const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().min(5).required().messages({
    'string.base': '"name" must be a string',
    'string.min': '"name" length must be at least 5 characters long"',
    'string.required': '"name" is required',
  }),
  quantity: Joi.number().min(1).required.messages({
    'number.base': '"quantity" must be a number',
    'number.min': '"quantity" must be a number larger than or equal to 1',
    'number.required': '"quantity" is required',
  }),
});

// Source: content discussed in monitoring with Renata Nunes