const router = require("express").Router();
const { Blog } = require("../../models");

// GET all user blogs for dashboard
router.get("/dashboard", async (req, res) => {
  try {
    const userBlogs = await Blog.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    res.render("dashboard", {
      userBlogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// //delete feature 
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const blogData = await Blog.destroy({
//       where: {
//         id: req.params.id,
//         userid: req.session.userid,
//       },
//     });

//     if (!blogData) {
//       res.status(404).json({ message: 'No subject found with this id!' });
//       return;
//     }

//     res.status(200).json(blogData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;