class Character {
  constructor(name, race, speed, health, attack, attackSpeed) {
    this.race = race;
    this.name = name;

    this.characteristics = {
      speed: speed,
      health: health,
      attack: attack,
      attackSpeed: attackSpeed
    }
    
    this.buffs = []
  }

  welcomeMessage() {
    console.log(`
      welcome ${this.race} - ${this.name},
      speed: ${this.characteristics.speed},
      health: ${this.characteristics.health},
      attack: ${this.characteristics.attack},
      attackSpeed: ${this.characteristics.attackSpeed},
      buffs: ${this.buffs}`);
  }

  applyBuff(buff) {
    buff.applyToTarget(this);
  }
}

class Orc extends Character {
  constructor(name, message) {
    super(name, 'Orc', 200, 2000, 500, 15);
    super.welcomeMessage();
    this.message = message;
    this.say();
  }

  say() {
    console.log(`${this.message} I\'m ${this.race}`);
  }
}

const orc = new Orc('Bonobo', 'Loc tarogar.... daboo....');

orc.applyBuff(berserker);
orc.applyBuff(windWalk);