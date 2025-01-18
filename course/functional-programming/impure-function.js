// impure function
// disebut impure function karena function addWith mengembalikan nilai yang berbeda ketika diberi argument yang sama
// function addWith merubah nilai value
let value = 0;

function addWith(addingValue) {
  // baris inilah yang membuat nilai dari value selalu berubah meskipun diberi argument yang sama
  // sehingga disebut impure function
  value += addingValue;

  console.log(`Current value is ${value}`);
  return value;
}

const result1 = addWith(1); // Output: Current value is 1
const result2 = addWith(1); // Output: Current value is 2
const result3 = addWith(1); // Output: Current value is 3

console.log(result1, result2, result3); // Output: 1, 2, 3
