class Person {
  constructor(race, name) {
    this.race = race;
    this.name = name;
  }
  welcomeMessage() {
    console.log(`welcome ${this.name}`);
  }
}

class Orc extends Person {
  constructor(race, name, message) {
    super(race, name);
    super.welcomeMessage()
    this.message = message;
  }
  say() {
    console.log(this.message)
  }
}

const orc = new Orc('Orc', 'Banobo', 'Loc tarogar - самогон и перегар');
orc.say();
