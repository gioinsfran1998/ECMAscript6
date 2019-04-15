/*
    Permiten que los parametros de la función sean inicializados por defecto
    (si no se pasan valores son undefined)
*/
let Calcular = (total=1000,test=0.15) => {
    console.log(total, test);
}

Calcular();
Calcular(3000, 3.14); // Podemos cambiar el parametro por defecto
