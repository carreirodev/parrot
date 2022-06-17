const { application } = require("express");

const express = require("express"),
	routes = express.Router(),
UserController = require("../controllers/userController"),
PostController = require("../controllers/postController");

routes.post("/usuario", UserController.create);
routes.get("/usuario", UserController.listar);
routes.patch("/usuario/:id", UserController.alterar);
routes.delete("/usuario/apagar/:id");

routes.post("/post", postsCreateValidation, PostController.create);
routes.get("/post", PostController.listar);
routes.put("/post/:id", postsUpdateValidation, PostController.alterar);
routes.delete("/post/:id", auth, PostController.apagarPost);

routes.post("/login", authLoginValidation, AuthController.login);

module.exports = routes;
