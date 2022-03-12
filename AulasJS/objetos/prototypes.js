function Person(name, age) {
    this.name = name,
        this.age = age,
        this.fullInfo = () => this.name + `, ${this.age}`;
}

Person.prototype.message = "Hello!"

const person1 = new Person('Bob', 20);

console.log(person1.fullInfo());
console.log(person1.message);

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function (percentage) {
    this.price = this.price * (100 - percentage) / 100;
};

function Car(name,price,doors){
    Product.call(this,name,price);
    this.doors=doors;
};

Car.prototype = Object.create(Product.prototype);
Car.prototype.constructor = Car;

const product1 = new Product('Shirt', 10);
product1.discount(50);
console.log(product1);

const car1 = new Car('Lamborghini',1000000,2);
car1.discount(10);
console.log(car1);