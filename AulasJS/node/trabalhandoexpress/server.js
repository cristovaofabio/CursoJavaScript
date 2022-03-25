const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/contact', (req, res) => {
    res.send('Thank you for contact us!');
});

app.post('/', (req, res) => {
    res.send('Form received!');
});

app.listen(3000, () => {
    console.log('The server is executing!!!')
    console.log('Check this link: http://localhost:3000');
});