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
    blog_title: "Salt Bae vs Gordon Ramsay",
    video_URL: "https://www.youtube.com/embed/vbDj69urC2o",
    blog_date: new Date(),
    user_id: 2,
    restaurant_id: 2,
  },
  {
    id: 4,
    blog_title: "Is Salt Bae Worth It?",
    video_URL: "https://www.youtube.com/embed/ah12OxMdnZ4",
    blog_date: new Date(),
    user_id: 2,
    restaurant_id: 2,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;
