const { Users } = require("../database/models");
const bcrypt = require("bcryptjs");

const UserController = {
	async create(req, res) {
		const { name, email, apartment, password } = req.body;
		const newPass = bcrypt.hashSync(password, 10);
		try {
			const newUser = await Users.create({
				name,
				email,
				apartment,
				password: newPass,
				status: true
			});
			return res.status(201).json(newUser);
		} catch (error) {
			res.status(500).json("Erro ao criar usuário");
		}
	},

	async listar(req, res) {
		try {
			const allUsers = await Users.findAll({
				where: {
					status: true
				},
				attributes: { exclude: "password" }
			});

			if (!allUsers) {
				return res.status(200).json("Nenhum usuário cadastrado!");
			}

			res.status(200).json(allUsers);
		} catch (error) {
			return res.status(500).json("Ocorreu um erro ao listar usuários");
		}
	}
};

module.exports = UserController;
