const express = require('express');
const {register, allUsers} = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', register);
router.get('/all', allUsers);

module.exports = router;
