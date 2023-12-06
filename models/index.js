const User = require('./User');
const Blog = require('./Blog');
const Restaurant = require('./Restaurant');
const Review = require('./Review'); 

User.hasMany(Blog, { //x
    foreignKey: 'user_id', 
    onDelete: 'CASCADE'
  });
  
  Blog.belongsTo(User, { //x
    foreignKey: 'user_id',
  });

User.hasMany(Restaurant, { //x
    foreignKey: 'user_id', 
    onDelete: 'CASCADE'
  });
  
  Restaurant.belongsTo(User, { //x
    foreignKey: 'user_id',
  });

  Restaurant.hasMany(Blog, { //x
    foreignKey: 'restaurant_id', 
    onDelete: 'CASCADE'
  });

  Blog.belongsTo(Restaurant, { //x
    foreignKey: 'restaurant_id',
  });
  

module.exports = { User, Blog, Restaurant };
= { User, Blog, Restaurant, Review }; // Include the Review model
