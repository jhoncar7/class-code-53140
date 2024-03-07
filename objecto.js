const Estudiante = require("./claseEjemplo");

// const estudiante1 = {
//     nombre: 'Facundo',
//     apellido: 'Lodi',
//     fechaNacimiento: '2000-03-01', // yyyy-mm-dd
//     curso: [
//         {
//             javascritp: 7,
//         },
//         {
//             react: 8,
//         },
//         {
//             backend: null
//         }
//     ],
//     estaBecado: true,
//     obtenerEdad: function () {


//         const fechaNacimientoObj = new Date(this.fechaNacimiento);

//         // le sumo 3 horas por el utc, ya que estamos en argentina
//         fechaNacimientoObj.setHours(fechaNacimientoObj.getHours() + 3);
//         let fechaActual = new Date();
//         // le resto 3 horas por el utc, ya que estamos en argentina
//         fechaActual.setHours(fechaActual.getHours() - 3);


//         // Obtener el día y el mes de la fecha de nacimiento
//         let diaNacimiento = fechaNacimientoObj.getDate();
//         let mesNacimiento = fechaNacimientoObj.getMonth() + 1; // devuelve el mes del 0-11 por eso le sumo 1

//         // Obtener el día y el mes de la fecha actual
//         let diaActual = fechaActual.getDate();
//         let mesActual = fechaActual.getMonth() + 1; // devuelve el mes del 0-11 por eso le sumo 1


//         // Calcular la edad
//         let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();

//         // Ajustar la edad si el mes actual es antes del mes de nacimiento,
//         // o si es el mismo mes pero el día actual es antes del día de nacimiento
//         if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento))
//             --edad;

//         return edad;
//     }
// }

// const estudiante2 = {
//     apellido: 'Zeballos',
//     fechaNacimiento: '2001-04-01', // yyyy-mm-dd
//     staBecado: true,
//     obtenerEdad: function () {

//         const fechaNacimientoObj = new Date(this.fechaNacimiento);

//         // le sumo 3 horas por el utc, ya que estamos en argentina
//         fechaNacimientoObj.setHours(fechaNacimientoObj.getHours() + 3);
//         let fechaActual = new Date();
//         // le resto 3 horas por el utc, ya que estamos en argentina
//         fechaActual.setHours(fechaActual.getHours() - 3);


//         // Obtener el día y el mes de la fecha de nacimiento
//         let diaNacimiento = fechaNacimientoObj.getDate();
//         let mesNacimiento = fechaNacimientoObj.getMonth() + 1; // devuelve el mes del 0-11 por eso le sumo 1

//         // Obtener el día y el mes de la fecha actual
//         let diaActual = fechaActual.getDate();
//         let mesActual = fechaActual.getMonth() + 1; // devuelve el mes del 0-11 por eso le sumo 1


//         // Calcular la edad
//         let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();

//         // Ajustar la edad si el mes actual es antes del mes de nacimiento,
//         // o si es el mismo mes pero el día actual es antes del día de nacimiento
//         if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento))
//             --edad;

//         return edad;
//     }
// }

// const estudiante3 = {
//     nombre: 'Juan',
//     apellido: 'Zeballos',
//     fechaNacimiento: '2001-04-01', // yyyy-mm-dd
//     obtenerEdad: function () {

//         const fechaNacimientoObj = new Date(this.fechaNacimiento);

//         // le sumo 3 horas por el utc, ya que estamos en argentina
//         fechaNacimientoObj.setHours(fechaNacimientoObj.getHours() + 3);
//         let fechaActual = new Date();
//         // le resto 3 horas por el utc, ya que estamos en argentina
//         fechaActual.setHours(fechaActual.getHours() - 3);


//         // Obtener el día y el mes de la fecha de nacimiento
//         let diaNacimiento = fechaNacimientoObj.getDate();
//         let mesNacimiento = fechaNacimientoObj.getMonth() + 1; // devuelve el mes del 0-11 por eso le sumo 1

//         // Obtener el día y el mes de la fecha actual
//         let diaActual = fechaActual.getDate();
//         let mesActual = fechaActual.getMonth() + 1; // devuelve el mes del 0-11 por eso le sumo 1


//         // Calcular la edad
//         let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();

//         // Ajustar la edad si el mes actual es antes del mes de nacimiento,
//         // o si es el mismo mes pero el día actual es antes del día de nacimiento
//         if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento))
//             --edad;

//         return edad;
//     }
// }

const cursos1 = [{ javascritp: 7, }, { react: 8, }, { backend: null }];
const cursos2 = [{ javascritp: 6, }, { backend: null }];
const estudiante1 = new Estudiante('Facundo', 'Lodi', '2000-03-01', cursos1, false, 'Buenos Aires');
const estudiante2 = new Estudiante('Mateo', 'Zeballos', '2001-04-01', cursos2, false, 'Uruguay');
const estudiante3 = new Estudiante('Facundo', 'Lodi', '2000-03-01', cursos1, false, 'Buenos Aires');
const estudiante4 = new Estudiante('Mateo', 'Zeballos', '2001-04-01', cursos2, false, 'Uruguay');

// console.log(estudiante1.datosEstudiante());
// console.log(estudiante2.datosEstudiante());

Estudiante.cantidadDeInstancias()