//-------STATES:
class SiegeState {
  constructor() {
    this._damage = 20;
    this._canMove = false;
  }

  get canMove() {
    return this._canMove;
  }
  get damage() {
    return this._damage;
  }
}


class TankState {
  constructor() {
    this._damage = 5;
    this._canMove = true;
  }

  get canMove() {
    return this._canMove;
  }
  get damage() {
    return this._damage;
  }
}

//----------------------

class Tank {
  constructor() {
    this._state = new TankState();
    this._canMove = this._state.canMove;
    this._damage = this._state.damage;
  }

  set state(state) {
    this._state = state;
  }

  get canMove() {
    this._canMove = this._state.canMove;
    return this._canMove;
  }
  get damage() {
    this._damage = this._state.damage;
    return this._damage;
  }
}

const tank = new Tank();
tank.state = new SiegeState();
console.log(tank.canMove);
console.log(tank.damage);

/*
it('Siege State', () => {
    let tank = new Tank();
    tank.state = new SiegeState();

    assert.equal(tank.canMove, false);
    assert.equal(tank.damage, 20);
  });


*/
