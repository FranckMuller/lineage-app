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
}

class WindWalk extends Buff {
  constructor() {
    super('wind walk', 20*60);
  }

  applyOnTarget(character) {
    character.speed += 50;

    return true;
  }
}
