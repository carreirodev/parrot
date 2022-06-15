const express = require("express"),
	routes = express.Router(),
	UserController = require("../controllers/userController"),
	PostController = require("../controllers/postController");

routes.post("/usuario", UserController.create);
routes.get("/usuario", UserController.listar);
routes.put("/usuario/:id");
routes.delete("/usuario/:id");

routes.post("/post", PostController.create);
routes.get("/post", PostController.listar);
routes.put("/post/:id");
routes.delete("/post/:id");

module.exports = routes;
