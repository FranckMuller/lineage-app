
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
      this.buffs.forEach((buff, idx) => {
        buff.tick();
        if (buff.toBeRemoved()) {
          buff.removeFromTarget(this);
          this.buffs.splice(idx, 1);
          console.log(this);
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

