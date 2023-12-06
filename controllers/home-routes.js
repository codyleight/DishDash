const router = require('express').Router();
const { Blog, User, Restaurant } = require('../models');
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


// Submit blog
router.post('/restaurant/:id/review', async (req, res) => {
  try {
    // Log the received restaurant ID
    console.log('Received restaurant id:', req.params.id);

    const newBlog = await Blog.create({
      blog_title: req.body.blog_title,
      video_URL: req.body.video_URL,
      user_id: req.session.user_id,
      restaurant_id: req.params.id,
      blog_date: new Date(),
    });

    // Redirect the user to the updated /restaurant/:id route
    res.redirect(`/restaurant/${req.params.id}`);
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
      logged_in: req.session.logged_in,
      restaurants: restaurants
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
  
    const restaurantData = await Restaurant.findAll()
  ;

   
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

router.get("/restaurant/add", (req, res) => {
  try {
    res.render("restaurantadd", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one restaurant
router.get('/restaurant/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    const dbRestaurantDataOne = await Restaurant.findByPk(req.params.id, {
      include: [
        {
          model: Blog,
          attributes: ['blog_title', 'video_URL', 'blog_date', 'user_id'],
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const restaurant = dbRestaurantDataOne.get({ plain: true });

    console.log(restaurant);

    res.render('reviews', { restaurant, loggedIn: req.session.loggedIn });
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
