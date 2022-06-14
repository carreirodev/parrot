const express = require("express");
const routes = require("./routes");
const db = require("./database");

const app = express();

app.use(express.json());

app.use(routes);

db.hasConnection();

const port = 4000;
app.listen(port, () => {
	console.log("Servidor rodando na porta " + port);
});
