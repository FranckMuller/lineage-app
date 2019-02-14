class Buff {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }

  applyOnTarget(character) {
    throw new TypeError('applyOnTarget function not implemented');
  }

  getName() {
    return this.name.toString();
  }

  tick() {
    this.duration--;
  }

  toBeRemoved() {
    if (this.duration <= 0) return true;
    return false;
  }
}

class Berserker extends Buff {
  constructor() {
    super('berserker', 5);
  }

  applyOnTarget(character) {
    character.speed += 15;
    character.attack += 20;
    character.attackSpeed += 15;
    // todo: lower p.def and m.def

    console.log('stats is added');

    return true;
  }

  removeFromTarget(character) {
    character.speed -= 15;
    character.attack -= 20;
    character.attackSpeed -= 15;
    console.log('stats is removed');
  }
}

class WindWalk extends Buff {
  constructor() {
    super('wind walk', 5);
  }

  applyOnTarget(character) {
    character.speed += 50;

    console.log('stats is added');

    return true;
  }

  removeFromTarget(character) {
    character.speed -= 50;

    console.log('stats is removed');
  }
}

class Rage extends Buff {
  constructor() {
    super('rage', 5);
  }

  applyOnTarget(character) {
    character.attack += 200;

    return true;
  }

  removeFromTarget(character) {
    character.attack -= 200;
  }
}

class Frenzy extends Buff {
  constructor() {
    super('rage', 5);
  }

  applyOnTarget(character) {
    character.attack += 1200;

    return true;
  }

  removeFromTarget(character) {
    character.attack -= 1200;
  }
}
