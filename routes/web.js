const express =  require('express');

const router = express.Router();
const homeController= require('../controllers/homeController');
const aboutController  = require('../controllers/aboutController')
router.get('/', homeController);
router.get('/about', aboutController)
module.exports = router;