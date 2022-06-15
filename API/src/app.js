const express = require("express");
const routes = require("./routes");
const handleError = require("./middlewares/handleError");

const db = require("./database");

const app = express();

app.use(express.json());

app.use(routes);

db.hasConnection();

app.use(handleError);

const port = 4000;
app.listen(port, () => {
	console.log("Servidor rodando na porta " + port);
});
