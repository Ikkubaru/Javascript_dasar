function max(arrayOfNumber) {
    // menggunakan spread operator untuk menduplikasi nilai arrayOfNumber
    return [...arrayOfNumber]
        //Array yang telah diduplikasi diurutkan dalam urutan ascending 
        // (dari kecil ke besar) menggunakan metode sort.
        .sort((a, b) => a - b)
        //mengambil elemen terakhir array karena elemen terakhir sudahh pasti angka paling besar
        //elemen terakhir ini akan dikembalikan sebagai hasil akhir function max
        .pop();
}
function registerEmail(person, email) {
    // menggunakan spread operator untuk menduplikasi nilai parameter person
    return { ...person, email };
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

//console.log(largest); // Output: 42
//console.log(numbers); // Output: [ 10, 23, 24, 7, 42, 18 ]

const person = {
    name: 'John',
    username: 'johndoe',
};

const personWithEmail = registerEmail(person, 'john@dicoding.com');

//console.log(person); // Output: { name: 'John', username: 'johndoe' }
//console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }

//IMMUTABLE ARRAY

// .map digunakan untuk menduplikasi nilai newArray 
// 
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => `${name}!`);

// console.log(newArray); 
// Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]



// ARRAY FILTER
const truthyArray = [1, '', 'Halo', 0, null, 'Harry', 14].filter
    (
        //mengiterasi setiap elemen ke dalam item dan mengubahnya menjadi boolean
        (item) => Boolean(item)
    );

// console.log(truthyArray); 
// Output: [ 1, 'Halo', 'Harry', 14 ]


const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

// console.log(eligibleForScholarshipStudents);

//[ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]



// ARRAY REDUCE
// reduce() adalah metode pada array yang digunakan untuk mengakumulasi 
// nilai-nilai dalam array menjadi satu nilai tunggal berdasarkan operasi tertentu

const students2 = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  // Fungsi callback yang diberikan kepada .reduce() akan dipanggil untuk setiap elemen dalam array
  const totalScore = students2.reduce((acc, student) => acc + student.score, 0);
  // acc (Accumulator): Nilai yang terus diakumulasi sepanjang iterasi
  // student (Current Value): Elemen array yang sedang diproses pada iterasi tertentu
  
  console.log(totalScore); 
  // Output: 313