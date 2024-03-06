
class TicketManger {

    #eventos;
    #preciobaseGanancia;

    constructor() {
        this.#eventos = [];
        this.#preciobaseGanancia = 0.15;
    }

    getEventos() {
        console.log(this.#eventos);
        return this.#eventos
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50) {

        const evento = {
            id: this.#eventos.length + 1,
            nombre,
            lugar,
            precio,
            capacidad,
            fecha: new Date(),
            participantes: []
        };
    }
}