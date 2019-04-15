/*
El objeto Set() permite almacenar valores unicos de cualquier
tipo
*/
let lenguajes = new Set();

lenguajes.add('php');
lenguajes.add('python');
lenguajes.add('java');
lenguajes.add('c#').add('go');

console.log(lenguajes);

/* .has : verifica si existe el valor creado*/
console.log(lenguajes.has('php'));

/* .size : devuelve el numero de valores creado*/
console.log(lenguajes.size);

/* .delete : elimina un elemento*/
console.log(lenguajes.delete('java'));

lenguajes.forEach(

    (lenguaje) => console.log(lenguaje)

)
