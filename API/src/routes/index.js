const express = require("express"),
	routes = express.Router(),
	UserController = require("../controllers/userController"),
	PostController = require("../controllers/postController"),
	AuthController = require("../controllers/authController"),
	usersCreateValidation = require("../validator/users/create"),
	usersUpdateValidation = require("../validator/users/update"),
	postsCreateValidation = require("../validator/posts/create"),
	postsUpdateValidation = require("../validator/posts/update"),
	authLoginValidation = require("../validator/auth/login");

routes.post("/usuario", usersCreateValidation, UserController.create);
routes.get("/usuario", UserController.listar);
routes.put("/usuario/:id", usersUpdateValidation, UserController.alterar);
routes.delete("/usuario/:id");

routes.post("/post", postsCreateValidation, PostController.create);
routes.get("/post", PostController.listar);
routes.put("/post/:id", postsUpdateValidation, PostController.alterar);
routes.delete("/post/:id", PostController.apagarPost);

routes.post("/login", authLoginValidation, AuthController.login);

module.exports = routes;
