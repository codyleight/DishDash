const User = require('./User');
const Blog = require('./Blog');
const Restaurant = require('./Restaurant');
const Review = require('./Review'); 

User.hasMany(Blog, {
  foreignKey: 'UserId', 
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'UserId',
});

// Add associations for the Review model
User.hasMany(Review, {
  foreignKey: 'UserId',
  onDelete: 'CASCADE',
});

Review.belongsTo(User, {
  foreignKey: 'UserId',
});

module.exports = { User, Blog, Restaurant, Review }; // Include the Review model
