class Character {
  constructor(name, race, health) {
    this.race = race;
    this.name = name;
    this.health = health;
  }

  welcomeMessage() {
    console.log(`welcome ${this.race} - ${this.name}, your health - ${this.health}`);
  }
}

class Orc extends Character {
  constructor(name, message) {
    super(name, 'Orc', '2000');
    super.welcomeMessage();
    this.message = message;
    this.say();
  }

  say() {
    console.log(`${this.message} I\'m ${this.race}`);
  }
}

const orc = new Orc('Bonobo', 'Loc tarogar.... daboo....');
