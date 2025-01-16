//spread operator, sesuai namanya, digunakan untuk menyebarkan nilai yang ada pada object / array


//menggabungkan 2 object
const obj1 = { name: 'Iqbal' };
const obj2 = { lastName: 'Sholeh', address: 'Karanganyar' };
const newObj = { ...obj1, ...obj2 };

//mengcopy nilai dari object
const Oriobj = {weapon :"sword", element : 'Ice'};
const CopiedObj = {...Oriobj};

//mengggabungkan array
const Array1 = ['Sword']
const Array2 = ['Claymore','Polearm']
const Merged = [...Array1,...Array2];

console.log(Merged);