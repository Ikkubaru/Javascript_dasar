//konsep rekursi (recursion), yaitu sebuah teknik di mana fungsi memanggil dirinya sendiri secara langsung atau 
// tidak langsung sampai mencapai kondisi tertentu

function generateArray(n) {

    // Base case untuk mengentikan infinite recursion
    if (n < 0) {
      return [];
    }
  //Hasil dari panggilan rekursif (generateArray(n - 1)) adalah array yang berisi angka dari 0 hingga n-1
    return [...generateArray(n - 1), n];
  }
  //nilai argument adalah 5
  // 5 akan dikurangi 1 terus menerus sampai base case terpenuhi yaitu n < 0 = -1
  console.log(generateArray(5)); // Output: [0, 1, 2, 3, 4, 5]