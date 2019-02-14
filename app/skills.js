// base class
class Skill {
    static get typeActive() { return 'active'};
    static get typeBuff() { return 'buff'};
    static get typeDebuff() { return 'debuff'};

    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.cooldown = null;
        this.currentCooldown = null;
    }

    getName() {
      return this.name;
    }

    validateType() {
        // todo: implement me
    }

    tick() {
      this.currentCooldown--;
    }

    isReady() {
      return this.currentCooldown <= 0
    }
}


class BuffSkill extends Skill { 

}

class TargetBasedSkill extends Skill{

}

class AOESkill extends Skill{

}


class RageSkill extends BuffSkill {
  constructor() {
      super('rage', Skill.typeBuff);
      this.effectDuration = 40;
      this.cooldown = 5;
      this.currentCooldown = 0;
  }


  use(character) {
    if(this.isReady()) {
      character.applyBuff(new Rage());
      this.currentCooldown = this.cooldown;
    } else {
      console.log('can not using skill')
    }
  }
}