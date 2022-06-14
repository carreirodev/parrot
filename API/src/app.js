const express = require("express");
const routes = require("./routes");
const db = require("./database");
const cors = require("cors");

const app = express();

app.use(cors)

app.use(express.json());

app.use(routes);

db.hasConnection();

const port = 4000;
app.listen(port, () => {
	console.log("Servidor rodando na porta " + port);
});