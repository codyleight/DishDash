const router = require('express').Router();
const { Restaurant } = require('../../models'); //require resturant model

  // GET all restaurants for restaurant page
router.get('/restaurant', async (req, res) => {
  try {
    const dbRestaurantDataAll = await Restaurant.findAll({
      include: [
        // {
        //   model: Comment,
        //   attributes: ['content', 'user_id', 'blog_id'],
        // },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const restaurants = dbRestaurantDataAll.map((restaurant) => restaurant.get({ plain: true }));

    res.render('restaurant', {
      restaurants,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



router.post("/", async (req, res) => {
  try {
    const dbResturantData = await Restaurant.create({
      resturant_name: req.body.restaurant_name,
      food_type: req.body.food_type,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbResturantData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;