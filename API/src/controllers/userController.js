const { Users } = require("../database/models");

const userController = {
	async create(req, res) {
		try {
			
			res.status(201);
		} catch (error) {
			console.log(error);
			return res.status(201);
		}
	},

	async getAll(req, res) {
		try {
			
			res.status(201);
		} catch (error) {
			console.log(error);
			return res.status(201);
		}
	}
};

module.exports = userController;