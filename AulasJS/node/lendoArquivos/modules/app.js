const path = require('path');
const filePath = path.resolve(__dirname, 'teste.json');
const write = require('./write');
const read = require('./read')

/*
const people = [
    { name: 'Bob' },
    { name: 'Mary' },
    { name: 'Sam' },
    { name: 'Jay' },
];

const json = JSON.stringify(people);
write(filePath, json);
*/

async function readFile(path) {
    const data = await read(path);
    renderData(data);
}

function renderData(data) {
    data = JSON.parse(data);
    
    data.forEach(element => {
        console.log(element);
    });
}

readFile(filePath);

/*
const fileData = readFile(filePath)
    .then(data => console.log(data));
*/