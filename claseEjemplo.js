
class Estudiante {

    // atributos
    #nombre;
    #apellido;
    #fechaNacimiento;
    #cursos;
    #estaBecado;
    #dondeVive;

    static CONTADOR = 0;

    // constructor
    constructor(nombre, apellido, fechaNacimiento, cursos, estaBecado, dondeVive) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#fechaNacimiento = fechaNacimiento;
        this.#cursos = cursos;
        this.#estaBecado = estaBecado;
        this.#dondeVive = dondeVive;

        Estudiante.CONTADOR = Estudiante.CONTADOR + 1;
    }

    // metodos

    #obtenerEdad() {
        const fechaNacimientoObj = new Date(this.#fechaNacimiento);

        // le sumo 3 horas por el utc, ya que estamos en argentina
        fechaNacimientoObj.setHours(fechaNacimientoObj.getHours() + 3);
        let fechaActual = new Date();
        // le resto 3 horas por el utc, ya que estamos en argentina
        fechaActual.setHours(fechaActual.getHours() - 3);


        // Obtener el día y el mes de la fecha de nacimiento
        let diaNacimiento = fechaNacimientoObj.getDate();
        let mesNacimiento = fechaNacimientoObj.getMonth() + 1; // devuelve el mes del 0-11 por eso le sumo 1

        // Obtener el día y el mes de la fecha actual
        let diaActual = fechaActual.getDate();
        let mesActual = fechaActual.getMonth() + 1; // devuelve el mes del 0-11 por eso le sumo 1


        // Calcular la edad
        let edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();

        // Ajustar la edad si el mes actual es antes del mes de nacimiento,
        // o si es el mismo mes pero el día actual es antes del día de nacimiento
        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento))
            --edad;

        return edad;
    }

    datosEstudiante() {
        const datos = `
        Nombre: ${this.#nombre}
        Apellido: ${this.#apellido},
        Edad: ${this.#obtenerEdad()}
        `

        return datos;
    }

    static cantidadDeInstancias() {
        console.log(Estudiante.CONTADOR);
    }
}

module.exports = Estudiante;