//--Looping dengan for
// didalam for ada 3 statement yang dipisahkan ';'
// statement pertama berisi inisialisasi variable dan valuenya
// statement kedua adalah kondisi untuk variable tersebut
// statement ketiga adalah nilai true dari statement kedua, apa yang akan dilakukan pada varible jika kondisi true
for (let i = 0; i < 5; i++) {
    // console.log(`Angka ke-${i} adalah ${i}`);
}

//--Looping dengan For In

const person =
{
    name: 'Me',
    origin: 'Karanganyar',
    birthYear: 2024
};

for (const property in person) {
    // console.log(`${property} bernilai ${person[property]}`);
}

//--Looping dengan For of
const weapon = ['Sword', 'Claymore', 'Polearm', 'Catalyst'];

for (const item of weapon) {
    //   console.log(item);
}

//--Looping dengan while
let i = 0;

while (i < 5) {
    //   console.log(`Angka ke-${i} adalah ${i}.`);
    //jangan lupa beri kode untuk mengubah nilai variable i agar tidak terjadi infinite loop
    //jika kode i++ dihilangkan akan terjadi inifinte loop
    i++;
}

//--Looping dengan Do While
let x = 0;

do {
    // console.log(`Angka ke-${x} adalah ${x}.`);
    //   jangan lupa beri kode untuk merubah variable karena jika tidak akan terjadi inifinite loop
    x++;
    //looping do while menaruh kondisi variable di akhir jadi looping akan dijalankan setidaknya sekali
} while (x < 5);


// Break statement
for (let i = 0; i < 10; i++) {
    // menghentikan looping dengan break ketika variable i mencapai nilai 5
    if (i === 5) {
        break;
    }

    // console.log(i);
}

// Continue Statement
for (let i = 0; i < 10; i++) {

    //ketika variable i berinlai 5 akan masuk ke kondisi dibawah, karena nilai true nya adalah melanjutkan looping jadi
    //looping dilanjutkan seperti biasa tapi tidak akan menampilkan angka 5
    if (i === 5) {
        continue;
    }
    console.log(i);
  }