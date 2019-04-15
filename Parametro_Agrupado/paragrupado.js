/* Permite representar un numero indefinido de argumentos */

// Operador Rest : Se usa en la cabecera de la funcion 

let MostrarCursos = (...cursos) => {
    console.log(cursos);
}

MostrarCursos('C#','java','python');
