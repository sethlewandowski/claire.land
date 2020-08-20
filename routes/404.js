const express = require('express');
const router = express.Router();
const pageNotFoundController = require('../controllers/404');

router.use(pageNotFoundController.get404Page);

module.exports = router;

