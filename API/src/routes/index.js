const express = require("express"),
	routes = express.Router(),
	UserController = require("../controllers/userController");

routes.get("/", (req, res) => {
	res.status(200).json({ msg: "teste de rotas" });
});

routes.post("/usuario/criar", UserController.create);
routes.get("/usuario/listar");
routes.put("/usuario/atualizar/:id");
routes.delete("/usuario/apagar/:id");

routes.post("/post/criar");
routes.get("/post");
routes.put("/post/atualizar/:id");
routes.delete("/post/apagar/:id");

routes.get("/", (req, res) => {
	res.status(200).json({ msg: "tesdte rotas" });
});

module.exports = routes;
