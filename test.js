const Contador = require("./contador");

const contador1 = new Contador('Nahuel Navarro');

// console.log(contador1.getResponsable());
contador1.contar()
console.log(contador1.getCuentaIndividual());
console.log(contador1.getCuentaGlobal());