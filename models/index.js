const User = require('./User');
const Blog = require('./Blog');
const Restaurant = require('./Restaurant');

User.hasMany(Blog, {
    foreignKey: 'UserId', 
    onDelete: 'CASCADE'
  });
  
  Blog.belongsTo(User, {
    foreignKey: 'UserId',
  });
  

module.exports = { User, Blog, Restaurant };
