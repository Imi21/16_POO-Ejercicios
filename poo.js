// Ejercicio POO 1:

// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.


class Persona{
    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    detalles(){
        console.log(`Me llamo ${this.nombre} y tengo ${this.edad} y nací siendo ${this.genero}`)
    }
}

let personaje = new Persona("Rufino",42,"delfín");
personaje.detalles();

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo){
        super(nombre, edad, genero)
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar(){
        console.log(`Bienvenido/a ${this.nombre} a la UCE (Universidad de Cazurros de España) pertenece a ${this.curso} del grupo ${this.grupo} dejará de ser ${this.genero} para convertirse en un ser de luz y al acabar sus estudios tendra ${this.edad + 40} años. `)
    }
}

let universitari = new Estudiante("Adela", 23, "mujer", "biologia", "F");
universitari.registrar()


class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel){
        super(nombre, edad, genero)
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar(){
        console.log(`Hola soy ${this.nombre} y seré tu profesor de ${this.asignatura} nivel ${this.nivel} `)
    }
}

let profe = new Profesor("Tolomeo", 55, "hombre", "Persones Humanes", "Super Sayain 4");
profe.asignar()





class warrior{
    constructor(life, power){
        this.power = power;
        this.life = life;
        
    }
    attack(){
        return this.power;
}
    defend(damage){
        this.life = this.life - damage;
        if (this.live <= 0){
        return console.log("Ha muerto")}

}
}


class maya extends warrior{
    constructor(life, power){
        super(life,power)
    }
    drinkColacao(){
        return ( this.power = this.power +10)
    }

}

class azteca extends warrior{
    constructor(life, power){
        super(life,power)
    }
    drinkNesquik(){
        return ( this.power = this.power +10)
    }

}

let mayan = new maya(40,20);
let aztec = new azteca(20,40);

aztec.drinkNesquik(); console.log(aztec);
mayan.drinkColacao(); console.log(mayan);
mayan.attack();console.log(mayan.attack());
aztec.defend(mayan.attack());console.log(aztec);


