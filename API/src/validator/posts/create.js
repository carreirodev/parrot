const { validate, Joi } = require("express-validation");

module.exports = validate({
	body: Joi.object({
		content: Joi.string().min(5).max(244).required(),
		user_id: Joi.number().required()
	})
});
