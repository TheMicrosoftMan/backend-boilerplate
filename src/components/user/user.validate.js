const Joi = require("joi");

const { userRoles } = require("./user.constants");
const { currencies } = require("../../constants/currencies");

const userCreateValidateSchema = Joi.object({
	firstName: Joi.string().min(2).max(10).required(),
	lastName: Joi.string().min(2).max(10).required(),
	phone: Joi.string().min(5).max(14).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).max(24).required(),
	role: Joi.string()
		.valid(...Object.keys(userRoles))
		.required(),
});

const bloggerCreateValidateSchema = userCreateValidateSchema.keys({
	instagramAccount: Joi.array(),
});

const advertiserCreateValidateSchema = userCreateValidateSchema.keys({
	currency: Joi.string().valid(...Object.keys(currencies)),
});

const userUpdateValidateSchema = Joi.object({
	firstName: Joi.string().min(2).max(10),
	lastName: Joi.string().min(2).max(10),
	phone: Joi.string().min(5).max(14),
	email: Joi.string().email(),
	password: Joi.string().min(6).max(24),
});

module.exports = {
	userCreateValidateSchema,
	userUpdateValidateSchema,
	bloggerCreateValidateSchema,
	advertiserCreateValidateSchema,
};
