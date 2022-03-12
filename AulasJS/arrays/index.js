let nomes = ['Maria', 'João', 'Rosa', 'Cristóvão', 'Ronaldo'];

console.log(nomes);
console.log(nomes[0]);
console.log(nomes[0][0]);

nomes.push('Angelina'); //adicionar um elemento no final da lista
console.log(nomes);
nomes.unshift('Marcelino'); //adicionar um elemento no começo da lista
console.log(nomes);

nomes.pop(); //remover elemento do final da lista
console.log(nomes);
nomes.shift(); //remover elemento do começo da lista
console.log(nomes);

console.log(nomes.slice(0, 3)); //imprimir apenas uma parte da lista
console.log(nomes.slice(0, -1)); //não mostrar o último elemento da lista

const copyValuesList = [...nomes];
copyValuesList.pop()
console.log("List names: " + nomes);
console.log("Copy list name: " + copyValuesList);

copyValuesList.push('New name'); //add name in the end of the list
copyValuesList.unshift('New name'); //add name in the start of the list

const removesNames = nomes.splice(4, 1)
console.log(nomes, removesNames);

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, 'Cristovao', ...a2, ...[7, 8, 9]];
console.log(a3);

const numbers = [1, 5, 3, 8, 1, 76, 33, 2, 0, 9];

function moreThat10(value) {
    return value > 10;
}

const filterNumbers = numbers.filter(moreThat10);
console.log(filterNumbers);

const people = [
    { name: 'Jhon', age: 31 },
    { name: 'Anna', age: 23 },
    { name: 'Paul', age: 40 },
    { name: 'Lauren', age: 28 }
];

function filterAge(person) {
    return person.age > 25;
}

const personMoreThat25 = people.filter(filterAge);
const personThatFinishWithN = people.filter(person => {
    return person.name.toLocaleLowerCase().endsWith('n');
});

console.log(personMoreThat25);
console.log(personThatFinishWithN);

const oldestPerson = people.reduce(function(person1,person2){
    if(person1.age>person2.age) return person1;
    return person2;
});

console.log(`Oldest person: ${oldestPerson.name}`);

const prices = [3,5,1,8,6,9,0];
const doublePrices = prices.map(valor =>{
    return valor*2;
});

console.log(doublePrices);

const totalValues = doublePrices.reduce(function(sum,value){
    return sum+=value;
});

console.log(`Total: ${totalValues}`);

doublePrices.forEach(element => {
    console.log(element);
});