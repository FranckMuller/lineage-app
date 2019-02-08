class Buff {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }

  applyBuff(character) {
    character.buffs.push(this.name);
    for (let key in this.characteristic) {
      character.characteristic[key] += this.characteristic[key];
    }
    setTimeout(() => {
      character.welcomeMessage()
    }, 200)
  }
}

class Berserker extends Buff {
  constructor() {
    super('berserker', 20*60);
    this.characteristic = {
      speed: 25,
      attackSpeed: 5
    }
    
  }
}

class WindWalk extends Buff {
  constructor() {
    super('wind walk', 20*60);
    this.characteristic = {
      speed: 50
    }
  }
}

const berserker = new Berserker();
const windWalk = new WindWalk();
