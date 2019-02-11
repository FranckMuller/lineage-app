
class World {
    constructor() {
        this.tickDuration = 1000;
        this.isOnline = false;
        this.tickerId = null;
        this.characters = [];
    }

    tick() {
        this.characters.forEach(function(character) {
            character.tick();
        });
    }

    launch() {
        this.tickerId = setInterval(this.tick.bind(this), this.tickDuration);
        this.isOnline = true;
    }

    destroy() {
        this.isOnline = false;
        clearInterval(this.tickerId);
    }

    addCharacter(character) {
        this.characters.push(character);
    }
}
