"use strict";

const bcrypt = require("bcryptjs");
const { faker } = require("@faker-js/faker");

let seed = [];

for (let i = 0; i < 15; i++) {
	const senha = faker.random.alpha(10);
	const novaSenha = bcrypt.hashSync(senha, 10);
	seed.push({
		name: faker.name.findName(),
		email: faker.internet.email(),
		apartment: faker.random.numeric(3),
		password: novaSenha,
		status: true,
		admin: false,
		createdAt: new Date(),
		updatedAt: new Date()
	});
}

const senha = "senha12345";
const novaSenha = bcrypt.hashSync(senha, 10);
seed.push({
	name: "admin",
	email: "admin@grupo9.com",
	apartment: "001",
	password: novaSenha,
	status: true,
	admin: true,
	createdAt: new Date(),
	updatedAt: new Date()
});

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Users", seed);
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete("Users", null, {});
	}
};
