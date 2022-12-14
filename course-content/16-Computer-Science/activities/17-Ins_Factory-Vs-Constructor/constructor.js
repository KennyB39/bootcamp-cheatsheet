// Below is a class based approach.
// We use inheritance with the `extends` keyword.
class Device {
    constructor(name){
        this.name = name
    }

    takePicture() {
        console.log(`Taking picture with ${this.name}`)
    }
}

// We create a `Phone` class which extends from the `Device` class giving access to its parent's methods.
class Phone extends Device {
    constructor(name, ringTone) {
        super(name) 
        this.ringTone = ringTone
    }

    // Create a `call` method on the `Phone` class.
    call() {
        console.log(`Phone: ${this.ringTone}`)
    }
}
console.log("-------");

// We have to use the `new` keyword.
const nokia = new Phone('Nokia', 'ring')
const iphone = new Phone('iphone', 'ring')
nokia.call()
nokia.takePicture()
console.log("---nokia - Phone extends Device----");
console.log(nokia);
console.log("---getPrototypeOf(nokia)s----");
console.log( Object.getPrototypeOf(nokia));
console.log("-------");

// Create a new class for appliances.
class Appliance {
    constructor(noise){
        this.noise = noise
    }

    makeNoise() {
        console.log(this.noise)
    }
}

class Dryer extends Appliance {
    constructor(noise) {
        super(noise)

    }

    dry() {
        console.log(`Dryer is on: ${this.noise}`);
    }
}

// This should all look familar because this is a part of object-oriented programming.
// We are using class inheritance to use methods from parent classes.
// This is not an incorrect way to design a system but let's ask ourselves:
// What happens if we want to make an appliance that can make a phone call?