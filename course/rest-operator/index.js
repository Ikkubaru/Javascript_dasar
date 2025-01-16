//rest operator digunakan untuk menangani jika sebuah function memerlukan banyak argument

//note: rest operator membuat argument menjadi array

function myFunction(main, ...secondary) {
    console.log('main weapon :', main);
    console.log('secondary weapon :', secondary);

    //karena rest operator adalah array, method .length bisa digunakan pada argument
    console.log(secondary.length)
  }
  
myFunction('Sword','Claymore','Polrearm','Catalyst')