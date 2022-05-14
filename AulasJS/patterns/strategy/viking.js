class Fly {
    move() {
        return 10;
    }
}

class Walk {
    move() {
        return 1;
    }
}

class Viking {
    constructor(moviment) {
        this._position = 0;
        this._moveBehavior = new Walk();
    }

    get position() {
        return this._position;
    }

    set moveBehavior(behavior = new Walk() | new Fly()) {
        this._moveBehavior = behavior;
    }

    move() {
        this._position = this._position + this._moveBehavior.move();
    }
}

const viking = new Viking();
viking.moveBehavior = new Fly();
viking.move();
console.log(viking.position);
viking.move();
console.log(viking.position);

/*

it('Fly Move', () => {
    let viking = new Viking();
    viking.moveBehavior = new Fly();
    
    viking.move();
    assert.equal(viking.position, 10);
    viking.move();
    assert.equal(viking.position, 20);
  });

*/