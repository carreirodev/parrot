const { validate, Joi } = require("express-validation");

module.exports = validate({
	body: Joi.object({
		name: Joi.string().min(5).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(6).max(25).required(),
		apartment: Joi.number().max(999).required()
	})
});
