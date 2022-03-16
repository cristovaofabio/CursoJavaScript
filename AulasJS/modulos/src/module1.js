export const firstName = 'Bob';
export const lastName = 'Cooper';
export const age = 35;

export function sum(number1, number2) {
    return number1 + number2;
}

export class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}