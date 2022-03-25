const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');

route.get('/', homeController.homePage);
route.post('/',homeController.dataReceived);

route.get('/contact',contactController.homePage);

module.exports = route;