function Person(name,age){
    this.name=name,
    this.age=age,
    this.fullInfo = ()=> this.name + `, ${this.age}`;
}

Person.prototype.message="Hello!"

const person1 = new Person('Bob',20);

console.log(person1.fullInfo());
console.log(person1.message);