

class Character {
  constructor(name, race, health, attack, attackSpeed) {
    this.race = race;
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.attackSpeed = attackSpeed;
    this.buffs = []
  }

  welcomeMessage() {
    console.log(`welcome ${this.race} - ${this.name}, your health - ${this.health}, your attack ${this.attack} and your attackSpeed ${this.attackSpeed}, your buffs - ${this.buffs}`);
  }

  applyBuff(buff) {
    this.attack += buff.attack;
    this.attackSpeed += buff.attackSpeed;
    this.buffs.push(buff.name);
    this.welcomeMessage();
  }
}

class Orc extends Character {
  constructor(name, message) {
    super(name, 'Orc', 2000, 500, 15);
    super.welcomeMessage();
    this.message = message;
    this.say();
  }

  say() {
    console.log(`${this.message} I\'m ${this.race} race - ${this.race}, your health - ${this.health}, your attack ${this.attack} and your attackSpeed ${this.attackSpeed}`);
  }
}

const orc = new Orc('Bonobo', 'Loc tarogar.... daboo....');
orc.applyBuff(berserker);