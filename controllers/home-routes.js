const router = require('express').Router();
const { Blog, User, Restaurant } = require('../models');
const withAuth = require('../utils/auth');

// GET for homepage
router.get('/', async (req, res) => {
  try {
      res.render('homepage', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.userid, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });
    console.log(userData);
    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Update the route handler for the root URL to handle "/homepage"
router.get('/homepage', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/reviews', (req, res) => {
  try {
    res.render('reviews', {
    loggedIn: req.session.loggedIn,
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

//resturants route
router.get('/restaurant', async (req, res) => {
  try {
    // Fetch all restaurants from the database
    const restaurantData = await Restaurant.findAll();

    // Convert the restaurant data to plain JSON objects
    const restaurants = restaurantData.map((restaurant) => restaurant.get({ plain: true }));

    // Render the restaurant Handlebars template and pass the restaurants data
    res.render('restaurant', {
      loggedIn: req.session.loggedIn,
      restaurants: restaurants
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get('/restaurant/add', (req, res) => {
  try {
    res.render('restaurantadd', {
    loggedIn: req.session.loggedIn,
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

module.exports = router;
