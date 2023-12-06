const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedRestaurants = require('./Restaurant');
const seedBlogs = require('./Blog');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedRestaurants();
  await seedBlogs();
  
  
  process.exit(0);
};

seedAll();
