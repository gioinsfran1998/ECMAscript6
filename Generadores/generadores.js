/* 
Los generadores son un tipo de funcion que retornan una seria de valores
con un algoritmo definido por el usuario
*/

function* cuadrados(){
    var n=1; // comienza en 1
    while(true){
        var c = n * n; // obtiene el cuadrado de un numero
        n++; // aumenta para la proxima 
        yield c; // devuelve el valor actual
    }
}

let gen = cuadrados()

console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
