const express = require("express");
const db = require("./database");

const app = express();

app.use(express.json());

db.hasConnection();

const port = 4000;
app.listen(port, () => {
	console.log("Servidor rodando na porta " + port);
});
