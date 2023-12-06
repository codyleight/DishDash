const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the restaurant model
class Restaurant extends Model {}

// Initialize the model's data and configuration
Restaurant.init(
  {
    // Unique ID for each restaurant
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    // Name of the restuarant 
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Type of food served at the restaurant
    food_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'restaurant',
    }
  );
  
  module.exports = Restaurant;