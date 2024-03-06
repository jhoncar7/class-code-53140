
// map()

// const numeros = [3, 5, 7, 8];


// const numerosDobles = numeros.map((value) => {
//     return value + value;
// });

// console.log(numerosDobles);

// push()
// numeros.push(10);
// console.log(numeros);

// find()
// const numeros = [3, 5, 7, 8];
// const buscar = numeros.find((value) => {
//     if (value == 7)
//         return value;
// });

// console.log(buscar);

// reducer()
const numeros = [3, 5, 7, 8];
const total = numeros.reduce((acumulador, value) => acumulador + value);
console.log(total);