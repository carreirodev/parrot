const { Users } = require("../database/models");

const UserController = {

	// async create(req, res) {
	// 	const newUser = await Users.create({
	// 		...req.body
	// 	});
	// 	return res.status(201).json(newUser);
	// },

	
	async listar(req, res) {
		try {
			const allUsers = await Users.findAll({
				attributes: {exclude:"password"}
				
			});

			console.log(allUsers);

			if (!allUsers){
				return res.status(200).json("Nenhum usuário cadastrado!")
			}

			res.status(200).json(allUsers);
		}
		catch (error) {
			return res.status(500).json("Ocorreu um erro ao listar usuários");
		};
	},
};

module.exports = UserController;
