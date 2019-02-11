
class World {
    constructor() {
        this.tickDuration = 1000;
        this.isOnline = false;
        this.tickerId = null;
        this.characters = [];
    }

    tick() {
        console.log('dummy tick');
    }

    launch() {
        this.tickerId = setInterval(this.tick, this.tickDuration);
    }

    destroy() {
        clearInterval(this.tickerId);
    }

    addCharacter(character) {
        this.characters.push(character);
    }
}
