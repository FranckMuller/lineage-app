// base class
class Skill {
    static get typeActive() { return 'active'};
    static get typeBuff() { return 'buff'};
    static get typeDebuff() { return 'debuff'};

    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.isReady = true;

        this.cooldown = null;
    }

    getName() {
      return this.name;
    }

    validateType() {
        // todo: implement me
    }

    tick() {
      if(!this.cooldown <= 0) {
        this.cooldown--;
        this.isReady = true;
      }
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
  }


  use(character) {
    if(this.isReady) {
      character.applyBuff(new Rage());
      this.isReady = false;
      console.log(character);
    } else {
      console.log('can not using skill')
    }
  }
}