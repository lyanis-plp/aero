const db = require('../config/db_connection');
const {DataTypes} = require('sequelize');

const Model_table = db.define('avia_model_table', {
	name_model: DataTypes.STRING,
	text_model: DataTypes.STRING,
  photo_model_1: DataTypes.STRING,
  photo_model_2: DataTypes.STRING,
  photo_model_3: DataTypes.STRING,
	photo_model_4: DataTypes.STRING,
	photo_model_5: DataTypes.STRING,
  activ_marq: DataTypes.STRING,
  vision_marq: DataTypes.INTEGER,
  sale_marq: DataTypes.INTEGER,
	price: DataTypes.INTEGER 
},{
    freezeTableName:true,
	timestamps:false
});
//User.hasMany(Model_table, {brendName:'uuid'})
(async()=>{await db.sync();})();
module.exports = Model_table;