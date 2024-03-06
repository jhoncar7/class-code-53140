
// ES7 ->
// exponencial (**)
// includes -> arrays

// const valor1 = 5;

// console.log(5 * 5 * 5);
// console.log(5 ** 3);

// const nombres = ['Gabriel', 'Isaac', 'Joaquin'];

// console.log(nombres.includes('isaac'));
// console.log(nombres.includes('Isaac'));

// ES8
// async - await
// Object.entries(), Object.values(), Object.Keys()

// const estudiante1 ={
//     nombre:'Joaquin',
//     apellido:'Capanegra',
//     edad:35,
//     barrio:'buenos aires'
// }

// console.log(Object.entries(estudiante1));
// console.log(Object.keys(estudiante1));
// console.log(Object.values(estudiante1));

// ES9

// const estudiante1 = {
//     nombre: 'Joaquin',
//     apellido: 'Capanegra',
//     edad: 35
// }

// const direccionEstudiante1 = {
//     ciudad: 'buenos aires',
//     barrio: 'palermo',
//     altura: 3000
// }

// const { apellido, nombre, edad, estadoCivil } = estudiante1;
// console.log(apellido, nombre, edad );

// spread
// const estudianteUnificado = { ...estudiante1, ...direccionEstudiante1 };
// console.log(estudianteUnificado);

// operador rest -> restante o resto
// const { altura,ciudad, barrio, ...rest} = estudianteUnificado;

// console.log(rest);

// ES10
// .trim() -> valores de tipo string
// .flat() -> arrays
// Dynamic import

// const cadena = '    hola        mundo         ';
// console.log({ cadena });
// const eliminarEspacios = cadena.trim();
// console.log({ eliminarEspacios });

// const numeros = [300, 400, 500, [4, 5, 6, 7], 1200, 400];
// console.log(numeros)
// console.log(numeros.flat());

// ES11
// or ||

let estaLloviendo;

const llueve = estaLloviendo || 'La variable no tiene ningun valor';

console.log({ llueve });