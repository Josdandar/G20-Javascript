/**
* Ejercicio 1.
* Realizar una funcion que tome como parametro un objeto
* y devuelva un array de arrays con la siguiente estructura
* [ [key, value], [key, value] ]
* makePairs( { a: 1, b: 2 } )
* => [ ['a', 1], ['b', 2]]
*
*
* @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
* @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*
* Se tiene que realizar 2 soluciones,
* 1 con Object.entries() y
*  Otra con .map() */


// const objeto = {
//     propiedad1: "primervalor",
//     propiedad2: "segundoValor",
//     propiedad3: "tercerValor"
// }

// function toArray(input){
//     let objectArray = Object.entries(input)
//     console.log(objectArray)
// }

// toArray(objeto)

/**
* Ejercicio 1.
* Realizar una funcion que tome como parametro un objeto
* y devuelva un array de arrays con la siguiente estructura
* [ [key, value], [key, value] ]
* makePairs( { a: 1, b: 2 } )
* => [ ['a', 1], ['b', 2]]
*
*
* @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
* @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*
* Se tiene que realizar 2 soluciones,
* 1 con Object.entries() y
*  Otra con .map() */


/**
* Dado un objeto de salarios
* Crear una funcion que retorne una lista
* con los salarios ordenados de menor a mayor
* orderSalary( salarios)
* -> [4000, 5000, 7000]
hint -> Usar metodo de objetos y luego un metodo de array para ordenar
*/

const salarios = {
    salario1: 5000,
    salario2: 1500, 
    salario3: 8000
}

function toList(input){
    let toArray = Object.values(input);
    console.log(toArray.sort());

    
    
}

toList(salarios)
