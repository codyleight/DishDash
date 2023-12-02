const User = require('./User');
const Resturants = require('./resturants');
const Reviews = require('./Reviews');

//TODO, have Resturants, Resturants have many reviews
//reviews belong to resturants
//Users have Reviews


module.exports = { User, Resturants, Reviews };
