
const constRaceOrc = 'orc';
const constRaceHuman = 'human';
const constRaceElf = 'elf';

class Character {

  constructor(name, race) {
    // todo: validate race with consts
    this.race = race;
    this.name = name;

    this.speed = 0;
    this.attackSpeed = 0;
    this.attack = 0;
    this.health = 0;

    this.buffs = [];
    this.skills = [];
  }

  dumpCommonInfo() {
    console.log(`
      ${this.race} - ${this.name},
      speed: ${this.speed},
      health: ${this.health},
      attack: ${this.attack},
      attackSpeed: ${this.attackSpeed},
      buffs: ${JSON.stringify(this.buffs)},
      skills: ${JSON.stringify(this.skills)}
    `);
  }

  applyBuff(buff) {
    if (buff.applyOnTarget(this)) {
      this.buffs.push(buff);
    } else {
        console.log('failed to apply buff ' + buff.getName());
    }
  }

  tick() {
    if(this.buffs.length) {
      this.buffs.forEach((buff) => {
        buff.tick(this);
        if(buff.duration === 1195) {
          let idx = this.buffs.findIndex((el) => el.name === buff.name);
          this.buffs.splice(idx, 1);
        }
      })
    } else {
      console.log('character not implemented tick');
    }
  }
  
}

class Orc extends Character {
  constructor(name) {
    super(name, constRaceOrc);

    this.speed = 200;
    this.attackSpeed = 500;
    this.attack = 680;
    this.health = 3200;

    this.skills.push(new RageSkill());
  }
}

