/*
    find(): devuelve el primer elemento que cumple la funcion
    proporcionada
*/

const cursos = ['#C','java','php','go'];

console.log(cursos.find(curso=>curso=='java'));

let buscar = cursos.find(elemento=>elemento=='go');

console.log(buscar);