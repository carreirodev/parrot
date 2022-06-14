const { Users, Posts } = require("../database/models");

const userController = {
	async create(req, res) {
		res.status(200).json({ msg: "teste de rotas" });
	}
};

module.exports = userController;
