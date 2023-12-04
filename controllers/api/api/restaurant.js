const { Restaurant } = require('../../models'); //require resturant model

router.post('/', async (req, res) => {
    try {
      const dbResturantData = await Restaurant.create({ //todo create a resturant depending on what we get from our script. using login model as an example.
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