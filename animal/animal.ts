class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    hungry () {
        console.log(this.name + " says 'I'm hungry!'")
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
}

var myAnimal = new Snake("Fido");
var myHorse = new Horse("Silver");

console.log(myAnimal.name);
console.log(myAnimal.hungry());
console.log(myHorse.name);