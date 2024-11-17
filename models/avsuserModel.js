const db = require('../config/db_connection');
const {DataTypes} = require('sequelize');

const User = db.define('artuser', {
	uuid: DataTypes.STRING,
	firstName: DataTypes.STRING,
	lastName: DataTypes.STRING,
	phone: DataTypes.STRING,
	sityName: DataTypes.STRING,
	vision_marq: DataTypes.INTEGER,
	sale_marq: DataTypes.INTEGER,
	},{
    freezeTableName:true,
	timestamps:false
});
(async()=>{await db.sync();})();
module.exports = User;