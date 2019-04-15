/* 
    El operador spread genera una lista de valores a partir de un array
*/

// Operador Spread : Se usa en la invocacion

let ComprarCurso = (nombre, precio, cantidad) => {
    console.log(nombre, precio, cantidad);
}

let curso = ['java',150,0.15];

ComprarCurso(...curso);

let array1 = [2, 3 ,4];
let array2 = [1, ...array1, 5, 6];

console.log(array2);