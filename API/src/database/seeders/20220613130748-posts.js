"use strict";

const { faker } = require("@faker-js/faker");

let seed = [];

for (let i = 0; i < 10; i++) {
	seed.push({
		content: faker.lorem.words(15),
		user_id: faker.random.numeric(1, { bannedDigits: ["0"] }),
		createdAt: new Date(),
		updatedAt: new Date()
	});
}

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Posts", seed);
	},
	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete("Posts", null, {});
	}
};
