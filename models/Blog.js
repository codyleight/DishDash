const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the blog model
class Blog extends Model {}

// Initialize the model's data and configuration
Blog.init(
  {
    // Unique ID for each blog
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    // Title of video blog
    blog_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    // URL of video blog
    video_URL: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Date the blog was added
    blog_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    // User ID of the user who created the blog
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user', 
        key: 'id',
      },
    },

    // restaurant_id of the restaurant being reviewed
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'restaurant', 
        key: 'id',
      },
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

// Export the model
module.exports = Blog;
