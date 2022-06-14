const express = require("express"),
	routes = express.Router(),
  UserController = require("../controllers/userController"),
	PostController = require("../controllers/postController");

routes.get("/usuario/listar", UserController.listar);
routes.put("/usuario/atualizar/:id");
routes.delete("/usuario/apagar/:id");

routes.post("/post/criar", PostController.create);
routes.get("/post/listar", PostController.listar);
routes.put("/post/atualizar/:id");
routes.delete("/post/apagar/:id");

module.exports = routes;
