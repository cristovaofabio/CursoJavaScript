class ContextATM {
    constructor(card) {
        this.cash = 2000;
        this.setCard(card);
    }

    setCard(card) {
        if (card === "card") {
            this.atmState = new HasCard();
        }
        else {
            this.atmState = new NoCard();
        }
    }

    insertCard() { }
    ejectCard() { }
    insertPin(pin) {
        this.atmState.insertPin(pin);
    }
    requestCash(cash) { }

}

//-------------------------//
class AtmInterfaceState {
    insertCard() { }
    ejectCard() { }
    insertPin(pin) { }
    requestCash(cash) { }
}
//-------------------------//

class HasCard extends AtmInterfaceState {
    insertCard() {
        console.log('the card has already been inserted')
    }
    ejectCard() {
        console.log('Card ejected!!!!')
    }
    insertPin(pin) {
        console.log(`Pin: ${pin}`)
    }
    requestCash(cash) { }
}

class NoCard extends AtmInterfaceState {
    insertCard() {
        console.log('Card inserted')
    }
    ejectCard() {
        console.log('Card ejected!!!!')
    }
    insertPin(pin) {
        console.log('No card');
    }
    requestCash(cash) {
        console.log('No card');
    }
}

//------------------------------//

const atm = new ContextATM("card");
atm.insertPin(12768123);
console.log('--------------');
atm.setCard('no card');
atm.insertPin(12768123);
