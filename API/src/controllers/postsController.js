const { Posts } = require("../database/models");

const PostsController = {

    async listar(req, res) {
        try{
            const listaPosts = await Posts.findAll({
                attributes: {exclude:"password"}
            });

            if (!listaPosts){
                return res.status(200).json("[]")
            }

            res.status(200).json(listaPosts);

        } catch (error){
            return res.status(500).json("Ocorreu um erro ao listar posts")
        }
    }
}

module.exports = PostsController