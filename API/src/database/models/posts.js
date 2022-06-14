const db = require("../index");
const { DataTypes } = require("sequelize");

const Posts = db.define("Posts", {
	idPost: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER
	},
	content: {
		type: DataTypes.STRING
	},
	user_id: {
		type: DataTypes.INTEGER,
		references: {
			model: {
				tableName: "Users"
			},
			key: "idUser"
		}
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

module.exports = Posts;
