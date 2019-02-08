class Character {
  constructor(name, race, speed, health, attack, attackSpeed) {
    this.race = race;
    this.name = name;

    this.characteristic = {
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
      speed: ${this.characteristic.speed},
      health: ${this.characteristic.health},
      attack: ${this.characteristic.attack},
      attackSpeed: ${this.characteristic.attackSpeed},
      buffs: ${this.buffs}`);
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

berserker.applyBuff(orc);
windWalk.applyBuff(orc);