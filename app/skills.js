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

    use(character) {
      throw new TypeError('use function not implemented');
    }

    getName() {
      return this.name;
    }

    validateType() {
        // todo: implement me
    }

    tick() {
      console.log(this.currentCooldown);
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

class FrenzySkill extends BuffSkill {
  constructor() {
      super('frenzy', Skill.typeBuff);
      this.effectDuration = 40;
      this.cooldown = 10;
      this.currentCooldown = 0;
  }


  use(character) {
    if(this.isReady() && character.currentHealth <= (character.health / 100 * 30)) {
      character.applyBuff(new Frenzy());
      this.currentCooldown = this.cooldown;
      console.log(character);
    } else {
      console.log('can not using skill')
    }
  }
}