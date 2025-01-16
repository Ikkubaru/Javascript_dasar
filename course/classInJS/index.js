class Hewan{
    constructor(mata = 2, kaki = 4){
        this.mata = mata
        this.kaki = kaki
    }
    berjalan(){
        console.log(`Hewan ini berjalan dengan ${this.kaki} kaki dan memiliki ${this.mata} mata`)
    }
}

const Hewanku = new Hewan(3, 8);
const Hewanku2 = new Hewan();
Hewanku.berjalan();
Hewanku2.berjalan()
console.log(Hewanku)
console.log(Hewanku2)