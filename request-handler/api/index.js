import express from 'express';
import mapbox from 'mapbox';
import axios from 'axios';



var router = express.Router();

router.use('/map', require('./map'));
router.use('/user', require('./user'));
router.use('/auth', require('./auth'));

module.exports = router;
