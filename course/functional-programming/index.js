const names = ["Harry", "Ron", "Jeff", "Thomas"];

// membuat array baru berdasarkan nilai names dengan map
const newNamesWithExcMark = names.map(
  //callback untuk setiap elemen dalam array names
  //setiap elemen array names dimofifikasi dengan menambahkan tanda ! di akhir string dan hasilnya ditampung newNamesWithExcMark
  (name) => `${name}!`
);

// menambahkan ! ke setiap index array dengan looping

// for(let i = 0; i < names.length; i++) {
//   newNamesWithExcMark.push(`${names[i]}!`);
// }

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]