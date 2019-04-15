/* 
    assign() : se utiliza para copìar valores de todas las propiedades de uno o mas objetos 
*/

const cuentas={cliente:'Hugo Roman Paredes'};
const alimentos={nombre:'milanesa', cantidad:2};
const bebidas={tipo:'gaseosa', sabor:'naranja'};

    /* Manera 1*/
const informacion = Object.assign(cuentas, alimentos, bebidas);

console.log(informacion);
console.log(informacion.cliente);

    /* Manera 2 */
// Object.assign(cuentas, alimentos, bebidas);

// console.log(cuentas);
// console.log(cuentas.nombre);