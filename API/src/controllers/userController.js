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
				attributes: { exclude: "password" }
			});

			if (!allUsers) {
				return res.status(200).json("Nenhum usuário cadastrado!");
			}

			res.status(200).json(allUsers);
		} catch (error) {
			return res.status(500).json("Ocorreu um erro ao listar usuários");
		}
	},
	
	async alterarUsuario(req, res) {
		const { idUser } = req.params;
		  try {
			const { idUser, name, email, apartment, password } = req.body;
			if (password) {
			  const newpassword = bcrypt.hashSync(password, 10);
			  const atualizarUsuario = await Users.update(
				{idUser, name, email, apartment, password},
				{
				  where: {
					id,
				  },
				}
			  );
			  return res.status(201).json("Psicologo atualizado");
			} else {
			const atualizarUsuario = await Users.update(
			  {idUser, name, email, apartment, password},
			  {
				where: {
				  idUser,
				},
			  }
			);
			return res.status(201).json("Dados do usuário atualizados com sucesso");
		  }
		}
		catch (error) {
		  res.status(400).json("Não foi possivel atualizar os dados do usuário");
		}
	  }	 
};

module.exports = UserController;
