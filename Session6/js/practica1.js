// Ejercicio 3 de la clase pasada pero en Funcion 
// pedir una oracion al usuario
// Contar las letras "a", "e" y espacios,
// Resolver con For, While y do While
// Por ejemplo 'hola kodErs'
//  ->  A -> 1
//  ->  E -> 1
//  ->  Espacios -> 1

let userString = prompt("Please input a sentence")
let totalA = 0
let totalE = 0
let totalSpaces = 0


function matchWithString(userInput){
    for (let index = 0; index < userInput.length; index++) {

        if(userInput[index] == userInput[index].match(/a/i)){
            totalA++
        }else if(userInput[index] == userInput[index].match(/[e]/gi)){
            totalE++
        }else{
            if(userInput[index] == userInput[index].match(/[" "]/gi)){
                totalSpaces++
            }
        }
    }window.alert(`El total de A fueron: ${totalA}, el total de E fueron: ${totalE} y el total de espacios fueron: ${totalSpaces}`)
}

matchWithString(userString)