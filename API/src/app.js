const express = require("express");
const routes = require("./routes");
const db = require("./database");
const cors = require("cors");
const routes = express.Router();

const app = express();

app.use(express.json());
app.use(routes);

app.use(routes);

db.hasConnection();

const port = 4000;
app.listen(port, () => {
	console.log("Servidor rodando na porta " + port);
});