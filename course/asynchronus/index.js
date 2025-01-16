// fetch('https://jsonplaceholder.typicode.com/users')
// .then(
//     //argument data utk menampung data dari api ( masih dalam bentuk json)
//     //lalu data di convert ke object biasa
//     (data) => data.json()
// )
// .then(
//     (dataFromJson) => console.log(dataFromJson)
// )

function akuBerjanji() {
    return new Promise(
        (resolve, reject) => {
            if (1 < 2) {
                resolve('janji ditepati')
            } else {
                reject('janji diingkari')
            }
        })
}
akuBerjanji().then(
    (data) => {
        console.log(data);
    })
// const getData = async () => {
//     const data = await fetch('https://jsonplaceholder.typicode.com/users')
//     const dataObj = await data.json()
//     console.log(dataObj)
// }
// getData()