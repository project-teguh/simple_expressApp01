const express = require('express');
const {post, allPosts} = require('../controllers/post.controller');

const router = express.Router();

router.post('/post', post);
router.get('/all', allPosts);

module.exports = router;
