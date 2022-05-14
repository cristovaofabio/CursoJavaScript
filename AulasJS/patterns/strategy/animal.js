class interfaceFly {
    fly() { }
}

class CanFly extends interfaceFly {
    fly() {
        console.log('Can fly!')
    }
}

class CanNotFly extends interfaceFly {
    fly() {
        console.log('Can not fly');
    }
}

class Animail {
    constructor(fly) {
        this.flyable = fly; 
    }

    canfly() {
        this.flyable.fly();
    }
}

class Dog extends Animail {
}

class Bird extends Animail {

}

const dog = new Dog(new CanNotFly());
dog.canfly();

console.log('------------');

const bird = new Dog(new CanFly());
bird.canfly();