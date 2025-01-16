class CoffeeMachine {
    //properti temperature menggunakan # agar properti tidak dapat diakses dari luar class secara langsung
    #temperature = 90;
    constructor(waterAmount) {
      this.waterAmount = waterAmount;
      this.#temperature = this.#defaultTemperature();
    }
  
    set temperature(temperature) {
      console.log('you are not allowed to change the temperature');
    }
  
    get temperature() {
      return this.#temperature;
    }

    #defaultTemperature(){
      return 90;
    }
  }
  
  const coffee = new CoffeeMachine(10);
  console.log('Sebelum diubah: ', coffee.temperature);
  coffee.temperature = 100;
  console.log('Setelah diubah: ', coffee.temperature);
