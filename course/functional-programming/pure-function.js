// pure function
// pure function adalah function yang selalu menghasilkan nilai yang sama setiap kali dipanggil dengan argument yang sama
function addWith(value, addingValue) {
  // function add with tidak merubah nilai dari variable global
  return value + addingValue;
}

const result1 = addWith(0, 1);
console.log(`result1 is ${result1}`); // Output: result1 is 1

const result2 = addWith(result1, 1);
console.log(`result2 is ${result2}`); // Output: result2 is 2

const result3 = addWith(result2, 1);
console.log(`result3 is ${result3}`); // Output: result3 is 3

console.log(result1, result2, result3); // Output: 1, 2, 3
