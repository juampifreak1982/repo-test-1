// quiero que aparezcan 10 hola mundo por consola


/* console.log("Hola mundo")
console.log("Hola mundo")
console.log("Hola mundo")
console.log("Hola mundo")
console.log("Hola mundo")
console.log("Hola mundo")
console.log("Hola mundo")
console.log("Hola mundo") */


//i = iterator   (la variable puede ser llamada de cualquier forma)

//inicializacion (let i = 1) / bucle (i <= 10)/ contador


/* for (let i = 1; i <= 10; i = i + 1){
    console.log("hola mundo")
    console.log("la variable i vale " + i)
} */




//ARRAY => Un array es una lista de elementos

//los elementos de la lista se separan con comas, entre las llaves

//en programacion se empieza a contar desde cero

//length = longitud del array o cantidad de elementos de la lista

/* const listadeProductos = ["Moto G8", "Pixel 3", "Vodafone 9"]
 */
/* console.log(listadeProductos.length) */

/* for(let i = 0; i < listadeProductos.length; i = i + 1;){
    console.log("el valor de la variable i e " i)
    console.log(listadeProductos[i])
} */


//VARIABLES JS Avanzado

//let se puede redeclarar pero no en un  mismo ambito o scope

//Por fuera es un ambito global

//por dentro (en el if) es un ambito local

//y dentro del IF 2 es un ambito sub local



/* var nombre = "Pepe"

if(true){
    var nombre = "Lucas"
    if(true){
        let nombre = "Maria"
        console.log(nombre)
    }
    console.log(nombre)
}

console.log(nombre) */




//Tengo un aray de notas y quiero calcular un promedio de notas

/* const notas1erSemestre = [8, 1, 3, 10, 7, 2]

let sumatoriadeNotas */



//Funciones

//Invocar () sirve para llamar a la variable o darle vida
const saludar = () => {
    console.log("Hola mundo")
}

saludar()