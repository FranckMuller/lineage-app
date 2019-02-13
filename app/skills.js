// base class
class Skill {
    static get typeActive() { return 'active'};
    static get typeBuff() { return 'buff'};
    static get typeDebuff() { return 'debuff'};

    constructor(name, type) {
        this.name = name;
        this.type = type;

        this.cooldown = null;
    }

    getName() {
      return this.name;
    }

    applyOnTarget(character) {
      throw new TypeError('applyOnTarget function not implemented');
    }

    validateType() {
        // todo: implement me
    }
}


class BuffSkill extends Skill { 

}

class TargetBasedSkill extends Skill{

}

class AOESkill extends Skill{

}


class RageSkill extends BuffSkill {
  constructor(effect) {
      super('rage', Skill.typeBuff);

      this.effectDuration = 40;
      this.cooldown = 30;
  }


  use(character) {
    character.applyBuff(new Rage());
    console.log(character);
  }
}