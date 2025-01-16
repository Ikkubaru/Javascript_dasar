function checkGrades(grades) {
    //looping akan berjalan selama i kurang dari panjang array grades, kode i < grades.length;
    for (let i = 0; i < grades.length; i++) {
        //melakukan pengkondisian jika nilai didalam array grades ada yang bukan number
      if (typeof grades[i] !== 'number') {
        throw new Error('Invalid input. Please provide an array of numbers.');
      }
  
      const grade = grades[i];
      let predicate;
  
      if (grade >= 90) {
        predicate = 'A';
      } else if (grade >= 80) {
        predicate = 'B';
      } else if (grade >= 70) {
        predicate = 'C';
      } else if (grade >= 60) {
        predicate = 'D';
      } else {
        predicate = 'E';
      }
  
      console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
    }
  }
  
  try {
    //pemanggilan fungsi di block try berisi variable dengan nilai array number
    // const studentGrades = [95, 85, 65, 80, 70, 90, 92];
    // checkGrades(studentGrades);
  } catch (e) {
    console.error(e);
  }

// Submission
function categorizeNumber(input) {
    /**
     * TODO:
     * Lengkapilah fungsi ini agar dapat menghasilkan output berupa kategori bilangan berdasarkan input yang diberikan.
     * Dengan ketentuan sebagai berikut:
     * 1. Jika input bukan number, bangkitkan (throw) error.
     * 2. Jika input adalah bilangan genap, kembalikan dengan nilai "Genap".
     * 3. Jika input adalah bilangan ganjil, kembalikan dengan nilai "Ganjil".
     * 4. Jika input adalah bilangan prima, kembalikan dengan nilai "Prima".
     * 5. Jika input adalah nol, kategorikan kembalikan dengan nilai "Nol".
     * 6. Jika input negatif, kembalikan dengan nilai "Negatif".
     */
  
    if (typeof input !== 'number') {
      throw new Error('Invalid input. Please provide a number.');
    }
  
    if (input === 0) {
      return "Nol";
    }
  
    if (input < 0) {
      return "Negatif";
    }
  
    switch (true) {
      case input % 2 === 0:
        return "Genap";
      case isPrime(input):
        return "Prima";
      default:
        return "Ganjil";
    }
  }
  
  function isPrime(num) {
    if (num < 2) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; 
      }
    }
    return true; 
  }
  
  try {
    console.log(categorizeNumber(19));  // Output: "Prima"
    console.log(categorizeNumber(20));  // Output: "Genap"
    console.log(categorizeNumber(9));   // Output: "Ganjil"
    console.log(categorizeNumber(0));   // Output: "Nol"
    console.log(categorizeNumber(-5));  // Output: "Negatif"
  } catch (error) {
    console.log(error.message);
  }
  