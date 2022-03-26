const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

route.get('/', homeController.homePage);
route.post('/',homeController.dataReceived);

route.get('/contact',contactController.homePage);

module.exports = route;