const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedRestaurants = require('./Restaurant');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedRestaurants();
  
  
  process.exit(0);
};

seedAll();
