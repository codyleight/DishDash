const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Resturants extends Model {}

Resturants.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    food_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'user', 
          key: 'id',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'resturants',
    }
  );
  
  module.exports = Resturants;