const fs = require('fs').promises;

module.exports = (path, data) => {
    fs.writeFile(path, data, { flag: 'w' });
}

/*
const path = require('path');
const filePath = path.resolve(__dirname, '..', 'teste.json');

const people = [
    { name: 'Bob' },
    { name: 'Mary' },
    { name: 'Sam' },
    { name: 'Jay' },
];

const json = JSON.stringify(people);
fs.writeFile(
    filePath, 
    json, 
    { flag: 'w' }
);
*/

/*
fs.writeFile(
    filePath, 
    'Frase one\n', 
    { flag: 'w', encoding: 'utf-8' }
);
*/