const express = require('express');
const router = express.Router();
const searchController = require('../../controller/searchController');

//search 
router.get('/', searchController.readAll);

module.exports = router;
