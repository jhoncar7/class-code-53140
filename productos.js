const productos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2,
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]


// se puede usar tambien el map(), pero el map siempre devuelve otro array para tenerlo en consideracion
const tipos = [];
productos.forEach(p => {
    const typeProduct = Object.keys(p);

    typeProduct.forEach(nombre => {
        if (!tipos.includes(nombre))
            tipos.push(nombre);
    });
});


// se puede usar tambien el map(), pero el map siempre devuelve otro array para tenerlo en consideracion
const cantidadTotal = [];
productos.forEach(p => {
    const valueProduct = Object.values(p);

    valueProduct.forEach(nombre => {
        cantidadTotal.push(nombre);
    });
});

const cantidadTotalVendida = cantidadTotal.reduce((acumulador, valor) => acumulador + valor);


console.log();
console.log('********** Lista de Productos **********');
console.log();
console.log({ tipos });

console.log();
console.log('********** Cantidad de Productos **********');
console.log();
console.log(`La cantidad o suma total de productos vendidos es: ${cantidadTotalVendida}`);

console.log();
console.log('********** Fin del Programa **********');