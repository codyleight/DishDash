const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// Submit blog
router.post('/restaurant/:id/review', async (req, res) => {
  try {
    // Log the received restaurant ID
    console.log('Received restaurant id:', req.params.id);

    const newBlog = await Blog.create({
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


router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Blog.create({
      ...req.body,
      userid: req.session.userid,
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;
