const express = require('express');
const { USER_ROUTE } = require('./route_name');
const userController = require('../controller/user_controller');

const router = express.Router();

router.get(USER_ROUTE, (req, res) => {
  userController.index(req, res);
});

module.exports = router;
