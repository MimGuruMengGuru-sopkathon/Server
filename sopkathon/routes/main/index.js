const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const util = require('../../modules/util');
const responseMessage = require('../../modules/responseMessage');
const statusCode = require('../../modules/statusCode');
const { User, Post, Like } = require('../../models');
const imageController = require('../../controller/imageController');

router.get('/today', imageController.todayPost);
router.get('/', imageController.readAll);

module.exports = router;