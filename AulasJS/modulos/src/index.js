import { firstName, lastName, sum, Person } from './module1';

console.log(`Hello, I'm ${firstName} ${lastName}`);
console.log(sum(10, 5));

const person = new Person('Mickey', 'Mouse');
console.log(person.firstName, person.lastName);