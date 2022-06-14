const express = require("express"),
	routes = express.Router();

const userController = require("../controllers/userController");



routes.post("/usuario/criar", userController.create);
routes.get("/usuario", userController.getAll);
routes.put("/usuario/atualizar/:id");
routes.delete("/usuario/apagar/:id");

routes.post("/post/criar");
routes.get("/post");
routes.put("/post/atualizar/:id");
routes.delete("/post/apagar/:id");

module.exports = routes;