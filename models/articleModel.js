const db = require('../config/db_connection');
const {DataTypes} = require('sequelize');

const Article = db.define('article_table', {
	type: DataTypes.STRING,
	photo: DataTypes.STRING,
	video: DataTypes.STRING,
	title: DataTypes.STRING,
	conva: DataTypes.TEXT
	},{
    freezeTableName:true,
	timestamps:true
});
(async()=>{await db.sync();})();
module.exports = Article;