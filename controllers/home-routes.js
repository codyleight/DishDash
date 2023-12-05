const router = require('express').Router();
const { Blog, User, Restaurant, Review } = require('../models');
const withAuth = require('../utils/auth');

// GET for homepage
router.get('/', async (req, res) => {
  try {
    const restaurantData = await Restaurant.findAll();

   
    const restaurants = restaurantData.map((restaurant) => restaurant.get({ plain: true }));
      res.render('homepage', {
      loggedIn: req.session.loggedIn,
      restaurants: restaurants
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


router.get('/blog/:id', async (req, res) => {
  try {
    const postData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blog = blogData.get({ plain: true });

    res.render('blog', {
      ...blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.userid, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Post }],
//     });
//     console.log(userData);
//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


// Update the route handler for the root URL to handle "/homepage"
router.get('/homepage', async (req, res) => {
  try {

    const restaurantData = await Restaurant.findAll();

   
    const restaurants = restaurantData.map((restaurant) => restaurant.get({ plain: true }));

    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blog = blogData.map((blog) => blog.get({ plain: true }));

    res.render('homepage', { 
      blog, 
      logged_in: req.session.logged_in,
      restaurants: restaurants
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Reviews route
router.get('/reviews', async (req, res) => {
  try {
    // Assuming you have a Review model with a findAll method
    const reviewData = await Review.findAll();

    // Map the reviews data to plain objects
    const reviews = reviewData.map((review) => review.get({ plain: true }));

    // Render the reviews page using the Handlebars template
    res.render('reviews', {
      loggedIn: req.session.loggedIn,
      reviews: reviews,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//resturants route
router.get('/restaurant', async (req, res) => {
  try {
  
    const restaurantData = await Restaurant.findAll();

   
    const restaurants = restaurantData.map((restaurant) => restaurant.get({ plain: true }));

    
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

router.post('/restaurant', async (req, res) => {
  try {
    const { restaurant_name, food_type } = req.body;


    const restaurant = await Restaurant.create({ restaurant_name, food_type });

   
    res.status(200).json({ message: 'Restaurant submitted successfully' });
  } catch (error) {

    console.error(error);
    res.status(500).json({ error: 'Failed to submit restaurant' });
  }
});



module.exports = router;
