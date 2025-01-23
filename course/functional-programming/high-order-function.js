//Higher-Order Function adalah fungsi yang menerima fungsi lain sebagai argumen, mengembalikan fungsi, atau keduanya.

//function apply menerima argument operation dan ...args, 
// ...args adalah rest parameter yang berarti kita bisa mengirimkan lebih dari satu argument ke dalam function apply.
function apply(operation, ...args) {
    //kemudian kita panggil operation dengan spread operator ...args, 
    // yang berarti kita mengirimkan semua argument yang diterima oleh function apply ke dalam operation.
    //operation adalah parameter, bukan fungsi yang didefinisikan secara eksplisit di dalam kode
    return operation(...args)
  }
  //function sum menerima 3 argument yaitu a, b, dan c, lalu mengembalikan hasil penjumlahan ketiga argument tersebut.
  function sum(a, b, c) {
    return a + b + c;
  }
  //function discount menerima 2 argument yaitu disc dan value,
  //  lalu mengembalikan hasil pengurangan value dengan diskon yang diberikan.
  function discount(disc, value) {
    return value - ((disc / 100) * value);
  }
  //kita panggil function apply dengan function sum dan 3 argument, 
  // lalu hasilnya kita tampung ke dalam variabel productPrice.
  const productPrice = apply(sum, 100, 100, 200);
  //kita panggil function apply dengan function discount, 25, dan productPrice, 
  // lalu hasilnya kita tampung ke dalam variabel withDiscount.
  const withDiscount = apply(discount, 25, productPrice);
  
  console.log('Product price:', productPrice); // Output: Product price: 400
  console.log('With discount 25%:', withDiscount); // Output: With discount 25%: 300