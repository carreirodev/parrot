const express = require("express");
const routes = express.Router();
// const userController = require("../controllers/userController");

routes.get("/", (req, res) => {
	res.status(200).json({ msg: "teste de rotas" });
});

// routes.get("/usuarios", userController.create);

module.exports = routes;
