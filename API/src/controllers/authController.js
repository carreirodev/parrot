const { Users } = require("../database/models");
const bcrypt = require("bcryptjs");

const AuthController = {
	async login(req, res) {
		const { email, password } = req.body;

		const user = await Users.findOne({
			where: {
				email,
				status: 1
			}
		});

		if (!user || !bcrypt.compareSync(password, user.password)) {
			return res.status(400).json("email ou senha invalida");
		}

		return res.json("logado");
	}
};

module.exports = AuthController;
