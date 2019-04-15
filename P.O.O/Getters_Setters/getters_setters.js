class Automoviles{
    constructor(marca, anio){
         this.marca = marca;
         this.anio = anio;
    }

    getMarca(){
        return this.marca;
    }

    getAnio(){
        return this.anio;
    }

    setMarca(marca){
        return this.marca = marca;
    }

    setAnio(anio){
        return this.anio = anio;
    }
    
}

let autos = new Automoviles('Toyota', 2016);


console.log(autos);

autos.setMarca('Hyundai');
autos.setAnio(2019)

console.log(autos);
