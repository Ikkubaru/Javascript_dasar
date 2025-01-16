// import * akan mengimport semua function atau variable yang memiliki export kecuali jika export nya memiliki default
// import * juga memerlukan alias yaitu 'as' untuk meng identifier ulang function untuk dipanggil
import * as myFunction from "./other.mjs";
//import dengan { } hanya berlaku untuk export tanpa default
//jika memililki export default maka importnya tidak perlu menggunakan { }
import {ThirdFunction}  from "./other.mjs";

// identifier alias tadi digunakan saat pemanggilan function lalu digabungkan dengan nama function yang sudah ada di file lain
myFunction.FirstFunction();
myFunction.SecondFunction();
// untuk import tanpa alias tidak perlu memanggil identifier tadi
ThirdFunction();