const express = require('express');
const {body} = require('express-validator');

const router = express.Router();

const  blogController = require('../contollers/blog');
// [POST] : /v1/blog/post
router.post('/post', 
[body('title').isLength({min: 5, max: 20}).withMessage('input title anda tidak sesuai'), 
body('body').isLength({min: 5}).withMessage('input body tidak sesuai')], 
blogController.createBlogPost );

module.exports = router;