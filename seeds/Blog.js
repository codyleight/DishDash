const { Blog } = require('../models');

const blogdata = [
  {
    id: 1,
    blog_title: "Splash Down Employee of the Month",
    video_URL: "https://www.youtube.com/embed/ZeB4lctmyig",
    blog_date: new Date(),
    user_id: 1,
    restaurant_id: 1,
  },
  {
    id: 2,
    blog_title: "Apple Turnover",
    video_URL: "https://www.youtube.com/embed/Gd34fKQiZ2s",
    blog_date: new Date(),
    user_id: 2,
    restaurant_id: 1,
  },
  {
    id: 3,
    blog_title: "Meat Was Raw",
    video_URL: "https://www.youtube.com/embed/sFNIRxv0tE",
    blog_date: new Date(),
    user_id: 2,
    restaurant_id: 2,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;
