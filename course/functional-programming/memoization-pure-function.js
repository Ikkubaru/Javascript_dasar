//Parameter fn: Merupakan fungsi yang akan dibungkus dengan memoization.
function memoize(fn) {
  //cache: Sebuah instance Map yang digunakan untuk menyimpan hasil perhitungan sebelumnya.
  // Key-nya adalah JSON string dari argumen, dan value-nya adalah hasil yang telah dihitung.
  const cache = new Map();

  return function (...args) {
    //key: Merupakan JSON string dari argumen yang digunakan untuk mencari hasil perhitungan sebelumnya di dalam cache.
    const key = JSON.stringify(args);
    //Jika hasil perhitungan sebelumnya sudah ada di dalam cache, maka hasil tersebut langsung dikembalikan.
    if (cache.has(key)) {
      return cache.get(key);
    }
    //Jika hasil perhitungan sebelumnya belum ada di dalam cache, maka fungsi fn akan dijalankan dengan argumen yang diterima.
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

function sumArray(arr) {
  //Jika panjang array arr adalah 0, maka fungsi akan mengembalikan 0.
  if (arr.length === 0) return 0;
  //Jika panjang array arr lebih dari 0,
  // maka fungsi akan menjumlahkan elemen pertama array dengan hasil rekursi dari sisa array.
  return arr[0] + sumArray(arr.slice(1));
}
//Kita memanggil function memoize dengan sumArray sebagai argument,
const memoizedSumArray = memoize(sumArray);
const largeArray = Array.from({ length: 5000 }, (_, i) => i + 1);

console.time("Memoized Sum First Call");
console.log("Total:", memoizedSumArray(largeArray));
console.timeEnd("Memoized Sum First Call");

console.time("Memoized Sum Second Call (Cached)");
console.log("Total:", memoizedSumArray(largeArray));
console.timeEnd("Memoized Sum Second Call (Cached)");
