const names = ["Harry", "Ron", "Jeff", "Thomas"];

const newNamesWithExcMark = names.map(
  (name) => `${name}!`
);

// for(let i = 0; i < names.length; i++) {
//   newNamesWithExcMark.push(`${names[i]}!`);
// }

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
