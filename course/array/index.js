const myArray = ['Android', 'Data Science', 'Web'];
delete myArray[1];
myArray.splice(1, 1);

//console.log(myArray);// Output: ['Android', <1 empty item>, 'Web']
// note:
// menggunakan delete hanya menghapus value dari index yang dihapus, tidak menghapus value beserta indexnya sehingga menyisakan item empty
// untuk menghapus index array beserta valuenya menggunakan splice dengan argument index dari array dan jumlah yang ingin dihapus
// 1,1 angka kedua adalah jumlah element yang ingin dihapus
// untuk menghapus element pertama gunakan shift
// untuk menghapus element terakhir gunakan pop


//-- Array destructing
const introduction = ['Hello', 'My Name'];
const [greeting, name] = introduction;
//console.log(name); // Output: Hello

//---Array reverse
myArray.reverse();
//console.log(myArray);

//--Sorting Array
myArray.sort();
//note : fungsi sort akan mengurutkan array berdasarkan abjad jika berisi string saja

//--Mapping Array
//key dari map adalah string
const weaponMap = new Map([
    ['sword', 500],
    ['claymore', 350],
    ['bow', 250],
    ['polearm', 300],
]);
//menambahkan nilai array ke map dengan .set
weaponMap.set('catalyst', 400);
//   delete nilai dari map
weaponMap.delete('catalyst');

const artefact = new Map()
// menggunakan number sebagai key dari map
artefact.set('set1', 'gladiator');
// console.log(artefact.get('set1'));

