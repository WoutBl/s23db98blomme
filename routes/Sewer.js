var express = require('express');
const sewer_controlers= require('../controllers/sewer');
var router = express.Router();
/* GET costumes */
router.get('/', sewer_controlers.Sewer_view_all_Page );
module.exports = router;
