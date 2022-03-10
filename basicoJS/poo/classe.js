class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    speak() {
        console.log(`${this.firstName} is speaking`);
    }

    eat() {
        console.log(`${this.firstName} is eating`);
    }

    drink() {
        console.log(`${this.firstName} is drinking`);
    }
}

const _speed = Symbol('speed'); //private variable
class Car {
    constructor(name) {
        this.name = name;
        this[_speed] = 0;
    }

    set speed(value) {
        if (typeof value !== 'number') return;
        if (value > 100 || value < 0) return;
        this[_speed] = value;
    }

    get speed() {
        return this[_speed];
    }

    speedUp() {
        if (this[_speed] > 100) return;
        this[_speed]++;
    }
}

const person1 = new Person("Cristóvão", "Silva");
person1.speak();

const car1 = new Car('Fusca');
car1.speed = 20;
car1.speedUp();
console.log(`Car speed: ${car1.speed}`);

class Device {
    constructor(name) {
        this.name = name;
        this.isOn = false;
    }

    turnOn() {
        if (this.isOn) {
            console.log(`The ${this.name} is on!`);
            return;
        }
        this.isOn = true;
    }

    turnOff() {
        if (!this.isOn) {
            console.log(`The ${this.name} is off!`);
            return;
        }
        this.isOn = false;
    }

    static helloStatic(){
        console.log('I am a static method!');
    }
}

const device1 = new Device('Computer');
Device.helloStatic();

class Smartphone extends Device {
    constructor(name, color, model) {
        super(name);
        this.color = color;
        this.model = model;
    }
};

const smartphone1 = new Smartphone('LG','Black','K8');
console.log(smartphone1);
