class Persona{

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    getNombre(){
        this.nombre = nombre;
    }

    getNombre(){
        this.edad = edad;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    setEdad(edad){
        this.edad = edad;
    }

}

class Profesor extends Persona{
    constructor(nombres, edad, codigo) {
        super(nombres, edad);
        this.codigo = codigo;
    }
}

let profesor = new Profesor('Jonas', 28, 2);

console.log(profesor);