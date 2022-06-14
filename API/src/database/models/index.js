const Users = require("./users");
const Posts = require("./posts");

Users.hasMany(Posts, {
	foreignKey: "user_id"
});

Posts.belongsTo(Users, {
	foreignKey: "user_id"
});

module.exports = {
	Users,
	Posts
};
