const express = require('express');
const { ARTICLE_ROUTE } = require('./route_name');
const router = express.Router();

router.get(ARTICLE_ROUTE, (req, res) => {
  console.log('router = ', ARTICLE_ROUTE);
  res.render('article');
});

router.get("/", (req, res) => {
  console.log('router = ', ARTICLE_ROUTE);
  res.render('article');
});

module.exports = router;