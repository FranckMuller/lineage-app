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
}

class Berserker extends Buff {
  constructor() {
    super('berserker', 20*60);
  }

  applyOnTarget(character) {
    character.speed += 15;
    character.attack += 20;
    character.attackSpeed += 15;
    // todo: lower p.def and m.def

    return true;
  }

  removeFromTarget(character) {
    character.speed -= 15;
    character.attack -= 20;
    character.attackSpeed -= 15;
  }

  tick(character) {
    this.duration--;
    if(this.duration === 1195) {
      this.removeFromTarget(character);
      console.log(character);
    }
  }
}

class WindWalk extends Buff {
  constructor() {
    super('wind walk', 20*60);
  }

  applyOnTarget(character) {
    character.speed += 50;

    return true;
  }

  removeFromTarget(character) {
    character.speed -= 50;
  }

  tick(character) {
    this.duration--;
    if(this.duration === 1195) {
      this.removeFromTarget(character);
      console.log(character);
    }
  }
}
