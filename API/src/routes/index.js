const express = require("express"),
	routes = express.Router(),
	UserController = require("../controllers/userController"), PostsController = require("../controllers/postsController")

routes.get("/", (req, res) => {
	res.status(200).json({ msg: "teste de rotas" });
});

routes.post("/usuario/criar");
routes.get("/usuario/listar", UserController.listar);
routes.put("/usuario/atualizar/:id");
routes.delete("/usuario/apagar/:id");

routes.post("/post/criar");
routes.get("/post/listar", PostsController.listar);
routes.put("/post/atualizar/:id");
routes.delete("/post/apagar/:id");


module.exports = routes;
