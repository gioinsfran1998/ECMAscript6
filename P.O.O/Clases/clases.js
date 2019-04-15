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

let persona = new Persona('Emiliano Guevara', 23);

console.log(persona);

persona.setEdad(25)

console.log(persona.edad);

persona.setNombre('Ricardo Vicente');

console.log(persona.nombre);

console.log(persona);