const express = require("express"),
	routes = express.Router(),
	UserController = require("../controllers/userController"),
	PostController = require("../controllers/postController"),
	usersCreateValidation = require("../validator/users/create"),
	postsCreateValidation = require("../validator/posts/create");

routes.post("/usuario", usersCreateValidation, UserController.create);
routes.get("/usuario", UserController.listar);
routes.put("/usuario/:id");
routes.delete("/usuario/:id");

routes.post("/post", postsCreateValidation, PostController.create);
routes.get("/post", PostController.listar);
routes.put("/post/:id");
routes.delete("/post/:id");

module.exports = routes;
