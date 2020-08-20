const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog');

router.get('/blog', blogController.getBlogPage);

module.exports = router;

