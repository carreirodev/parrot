const db = require("../index");
const { DataTypes } = require("sequelize");

const Users = db.define("Users", {
	idUser: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	apartment: {
		type: DataTypes.INTEGER
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	status: {
		type: DataTypes.BOOLEAN
	},
	admin: {
		type: DataTypes.BOOLEAN
	},
	createdAt: {
		allowNull: false,
		type: DataTypes.DATE
	},
	updatedAt: {
		allowNull: false,
		type: DataTypes.DATE
	}
});

module.exports = Users;
