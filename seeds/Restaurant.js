const { Restaurant } = require("../models");

const restaurantdata = [
  {
    id: 1,
    restaurant_name: "Waffle House",
    food_type: "American Food",
    user_id: 1,
  },
  {
    id: 2,
    restaurant_name: "Salt Bae",
    food_type: "Steakhouse",
    user_id: 1,
  },
  {
    id: 3,
    restaurant_name: "Savor Street Grill",
    food_type: "American Grill",
    user_id: 2,
  },
  {
    id: 4,
    restaurant_name: "Spice Haven",
    food_type: "Indian Fusion",
    user_id: 1,
  },
  {
    id: 5,
    restaurant_name: "Mango Tango Bistro",
    food_type: "Caribbean",
    user_id: 2,
  },
  {
    id: 6,
    restaurant_name: "Noodle Nirvana",
    food_type: "Asian Noodles",
    user_id: 1,
  },
  {
    id: 7,
    restaurant_name: "Mediterranean Delights",
    food_type: "Mediterranean",
    user_id: 2,
  },
  {
    id: 8,
    restaurant_name: "Bella Italia Trattoria",
    food_type: "Italian",
    user_id: 1,
  },
  {
    id: 9,
    restaurant_name: "Tokyo Sushi Haven",
    food_type: "Japanese Sushi",
    user_id: 2,
  },
  {
    id: 10,
    restaurant_name: "El Ranchero Tacos",
    food_type: "Mexican Tacos",
    user_id: 1,
  },
  {
    id: 11,
    restaurant_name: "Bistro de Paris",
    food_type: "French",
    user_id: 2,
  },
  {
    id: 12,
    restaurant_name: "Thai Orchid Kitchen",
    food_type: "Thai",
    user_id: 1,
  },
  {
    id: 13,
    restaurant_name: "Crispy Crepes Corner",
    food_type: "French Crepes",
    user_id: 2,
  },
  {
    id: 14,
    restaurant_name: "Sizzlin' Seoul BBQ",
    food_type: "Korean BBQ",
    user_id: 1,
  },
  {
    id: 15,
    restaurant_name: "Casa de Tapas",
    food_type: "Spanish Tapas",
    user_id: 2,
  },
  {
    id: 16,
    restaurant_name: "Taste of Athens Gyros",
    food_type: "Greek",
    user_id: 1,
  },
  {
    id: 17,
    restaurant_name: "Sizzling Wok Express",
    food_type: "Chinese Stir-fry",
    user_id: 2,
  },
  {
    id: 18,
    restaurant_name: "Samba Grill House",
    food_type: "Brazilian Churrasco",
    user_id: 1,
  },
  {
    id: 19,
    restaurant_name: "Fiesta Fresh Tostadas",
    food_type: "Mexican Tostadas",
    user_id: 2,
  },
  {
    id: 20,
    restaurant_name: "The Aussie Outback Steakhouse",
    food_type: "Australian Steakhouse",
    user_id: 1,
  },
  {
    id: 21,
    restaurant_name: "Aloha Tiki Lounge",
    food_type: "Hawaiian Fusion",
    user_id: 2,
  },
  {
    id: 22,
    restaurant_name: "Urban Greens Salad Bar",
    food_type: "Healthy Salads",
    user_id: 1,
  },
];

const seedRestaurants = () => Restaurant.bulkCreate(restaurantdata);

module.exports = seedRestaurants;
