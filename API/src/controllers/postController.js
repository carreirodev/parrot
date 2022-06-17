const { Posts } = require("../database/models");
const PostController = {
	async create(req, res) {
		
		try {
			console.log(req.auth);
			const {content, user_id} = req.body
			const newPost = await Posts.create({
				content,
				user_id	
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
	},

	async apagarPost(req, res) {
		try {
			const { id } = req.params;
			const post = await Posts.findOne({
				where: {	
					idPost: id
				}
			});

			
			if (post) {
				if(!post.admin || post.user_id == req.auth.id){
					await Posts.destroy({
						where: { 
							idPost: id
						}
					});
					return res.sendStatus(204);
				}
			}

			res.status(404).json("Post não encontrado!");
		} catch (error) {
			return res.status(500).json("Erro ao tentar apagar post!");
		}
	}
};

module.exports = PostController;
