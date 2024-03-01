
class Contador {

    // atributos
    // contructor
    // metodos

    static CONTADOR_GLOBAL = 0;

    constructor(responsable) {
        this.responsable = responsable;
        this.contadorResponsable = 0;
    }

    getResponsable() {
        return this.responsable;
    }

    contar() {
        // this.contadorResponsable += 1;
        // this.contadorResponsable = this.contadorResponsable + this.contadorResponsable;
        this.contadorResponsable++;
        Contador.CONTADOR_GLOBAL++;
    }

    getCuentaIndividual() {
        return this.contadorResponsable;
    }

    getCuentaGlobal() {
        return Contador.CONTADOR_GLOBAL;
    }

}


module.exports = Contador;