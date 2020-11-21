const express = require('express');
const router = express.Router();
const detailController = require('../../controller/detailController');

//detail 
router.get('/', detailController.readAll);

module.exports = router;
