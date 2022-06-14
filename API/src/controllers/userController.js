const { Users } = require("../database/models");

const UserController = {
	async create(req, res) {
		const newUser = await Users.create({
			...req.body
		});
		return res.status(201).json(newUser);
	}
};

module.exports = UserController;
