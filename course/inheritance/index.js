// class SmartPhones {
//     constructor(color, brand, model) {
//         this.color = color;
//         this.brand = brand;
//         this.model = model;
//     }

//     charging() {
//         console.log(`Charging ${this.model}`);
//     }
// }

// class iOS extends SmartPhones {
//     airDrop() {
//         console.log('iOS have a behavior AirDrop');
//     }
// }

// class Android extends SmartPhones {
//     splitScreen() {
//         console.log('Android have a Split Screen');
//     }
// }

// const ios = new iOS('black', 'A', '12 Pro Max');
// const android = new Android('white', 'B', 'Galaxy S21');

// ios.charging(); // Output: Charging 12 Pro Max
// ios.airDrop(); // Output: iOS have a behavior AirDropa

// android.charging(); // Output: Charging Galaxy S21
// android.splitScreen(); // Output: Android have a Split Screen

// console.log(ios instanceof SmartPhones); // Output: true
// console.log(android instanceof SmartPhones); // Output: true



class Animal{
    name
    age
    isMammal

    constructor(name, age, isMammal){
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Rabbit extends Animal{
    isMammal = true
    eat(){
        console.log( `${this.name} sedang makan!`);
    }
}
class Eagle extends Animal{
    isMammal = false
    fly(){
        console.log(`${this.name} sedang terbang!`);
    }
}

const myRabbit = new Rabbit ('Labi',2, true)
const myEagle = new Eagle ('Elo',2, false)
myRabbit.eat();
myEagle.fly();