// Error handling dengan try catch

try {
    console.log('Memulai program');
    throw new Error('Error: Program berhenti');
    console.log('Mengakhiri program');
  } catch (err) {
    //catch akan menangkap argument error
    console.log('Karena ada error, blok ini akan dieksekusi');
  }

// Finally
// finally akan selalu dieksekusi ketika program ada error maupun tidak ada error
try {
  console.log('Ini try block');
} catch (err) {
  console.log('Ini catch block');
} finally {
  console.log('Ini finally block');
}