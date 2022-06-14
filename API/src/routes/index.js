const express = require("express"),
	routes = express.Router(),
	UserController = require("../controllers/userController");

routes.get("/", (req, res) => {
	res.status(200).json({ msg: "teste de rotas" });
});

routes.post("/usuarios", UserController.create);

module.exports = routes;
