require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        //console.log('Connection to database established!');
        app.emit('all right!');
    })
    .catch(e => console.log(e));

const routes = require('./routes');
const path = require('path');
const myMiddleware = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(myMiddleware);
app.use(routes);

app.on('all right!', () => {
    app.listen(3000, () => {
        console.log('The server is executing...')
        console.log('Check this link: http://localhost:3000');
    });
});