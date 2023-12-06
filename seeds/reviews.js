const { Restaurant } = require('../models');

const restaurantdata = [
  {
    id:1,
    restaurant_name: 'Pluckers',
    food_type: 'American',
  },
  {
    id:2,
    restaurant_name: 'Panda Express',
    food_type: 'Chinese Food',
  },
];

const seedRestaurants = () => Restaurant.bulkCreate(restaurantdata);

module.exports = seedRestaurants;