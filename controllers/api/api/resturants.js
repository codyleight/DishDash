const { User, Resturant } = require('../../models'); //require resturant model

router.post('/', async (req, res) => {
    try {
      const dbResturantData = await User.create({ //todo create a resturant depending on what we get from our script. using login model as an example.
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
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