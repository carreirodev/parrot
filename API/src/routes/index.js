const express = require("express"),
	routes = express.Router(),
  UserController = require("../controllers/userController"),
	PostController = require("../controllers/postController");

routes.get("/usuario", UserController.listar);
routes.put("/usuario/:id", UserController.alterarUsuario);
routes.delete("/usuario/apagar/:id");

routes.post("/post", PostController.create);
routes.get("/post", PostController.listar);
routes.put("/post/:id", PostController.alterarPost);
routes.delete("/post/:id");

module.exports = routes;
