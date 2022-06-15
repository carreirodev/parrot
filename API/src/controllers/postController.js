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
	},

	async alterar(req, res) {
		try {
			const { id } = req.params;
			const { content } = req.body;

			await Posts.update(
				{ content },
				{
					where: {
						idPost: id
					}
				}
			);

			const postAtualizado = await Posts.findOne({
				where: {
					idPost: id
				},

				attributes: {
					exclude: ["user_id"]
				}
			});
			return res.status(200).json(postAtualizado);
		} catch (error) {
			return res.status(400).json("Post nao atualizado");
		}
	}
};

module.exports = PostController;
