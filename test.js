// import Calculadora from "./calculadora.js";

// const c1 = new Calculadora();

// c1.sumar(1,2);
// c1.restar(1,2);

const modo = 'calculo';

const ejemploImport = async () => {

    if (modo === 'calculo') {
        const { default: Calculadora } = await import('./calculadora.js');
        const c1 = new Calculadora();
        c1.sumar(1, 2);
        c1.restar(1, 2);

    }
}

ejemploImport()