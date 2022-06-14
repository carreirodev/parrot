const { Posts } = require("../database/models");

const PostController = {
	async create(req, res) {
		try {
			const newPost = await Posts.create({
				...req.body
			});
			return res.status(201).json(newPost);
		} catch (error) {
			res.status(500).json("Erro ao criar post.");
		}
	},

	async listar(req, res) {
		try {
			const listaPosts = await Posts.findAll({
				attributes: { exclude: "password" }
			});

			if (!listaPosts) {
				return res.status(200).json("[]");
			}
			res.status(200).json(listaPosts);
		} catch (error) {
			return res.status(500).json("Ocorreu um erro ao listar posts");
		}
	}
};

module.exports = PostController;
