/*
const HomeModel = require('../models/HomeModel');

HomeModel.create({
    title: 'Some title',
    description: 'Some description'
})
    .then(data => console.log(data))
    .catch(error => console.log(error));

*/

exports.homePage = (req, res) => {
    res.render('index');
    return;
};

exports.dataReceived = (req, res) => {
    res.send(req.body);
    return;
};