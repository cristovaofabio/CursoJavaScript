class ContextPerson {
    constructor(age) {
        this.setAge(age);
    }

    setAge(age) {
        this.age = age;
        if (age >= 18) {
            this.state = new Adult();
        }
        else if (age >= 16 && age < 18) {
            this.state = new Adolecent();
        }
        else {
            this.state = new Young();
        }
    }

    driveCar() {
        this.state.driveCar()
    }

    vote() {
        this.state.vote();
    }
}

//-------------------------------------

class PersonInterfaceState {
    driveCar() { }
    vote() { }
}

//-------------------------------

class Adult extends PersonInterfaceState {
    driveCar() {
        console.log('Can drive cars');
    }

    vote() {
        console.log('Can vote');
    }
}

class Adolecent extends PersonInterfaceState {
    driveCar() {
        console.log('Can not drive car');
    }

    vote() {
        console.log('Can vote');
    }
}

class Young extends PersonInterfaceState {
    driveCar() {
        console.log('Can not drive car');
    }

    vote() {
        console.log('Can not vote');
    }
}

//-----------------------------------------------------

const person = new ContextPerson(15);
person.driveCar();
person.vote();
console.log('-------------')
person.setAge(20);
person.driveCar();
person.vote();
