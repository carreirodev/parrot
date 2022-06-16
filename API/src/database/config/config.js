require("dotenv").config();

module.exports = {
	development: {
		username: "root",
		password: "Hardc0reMac",
		database: "parrot_social",
		host: "127.0.0.1",
		dialect: "mysql"
	},
	test: {
		username: "root",
		password: "Hardc0reMac",
		database: "parrot_social",
		host: "127.0.0.1",
		dialect: "mysql"
	},
	production: {
		username: "root",
		password: "Hardc0reMac",
		database: "parrot_social",
		host: "127.0.0.1",
		dialect: "mysql"
	}
};
