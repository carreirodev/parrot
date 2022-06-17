const { Users } = require("../database/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secret = require("../configs/secret");

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

		const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, secret.key);

		return res.json(token);
	}
};

module.exports = AuthController;
