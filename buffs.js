class Buff {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }

  applyToTarget(character) {
    character.buffs.push(this.name);
    for (let key in this.characteristic) {
      character.characteristics[key] += this.characteristics[key];
    }
  }
}

class Berserker extends Buff {
  constructor() {
    super('berserker', 20*60);
    this.characteristics = {
      speed: 25,
      attackSpeed: 5
    }
    
  }
}

class WindWalk extends Buff {
  constructor() {
    super('wind walk', 20*60);
    this.characteristics = {
      speed: 50
    }
  }
}

const berserker = new Berserker();
const windWalk = new WindWalk();
