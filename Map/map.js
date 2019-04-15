/* 
     El metodo map() crea un nuevo array con los resultados de la llamada
     a la funcion aplicados a cada uno de sus elementos 

*/
let mapa = new Map();

        // Clave    Valor
mapa.set('nombre','Alberto');
mapa.set('apellido','Guiterrez');
mapa.set('anio','21');

console.log(mapa);
console.log(mapa.get('nombre'));
console.log(mapa.has('apellido'));
console.log(mapa.delete('anio'));

console.log(mapa);

var numbers = [1,5,10,15];
var doubles = numbers.map(function(x){
    return x * 2;
});

console.log(doubles)