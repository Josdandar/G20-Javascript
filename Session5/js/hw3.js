// Ejercicio 3
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

for (let index = 0; index < userString.length; index++) {
    if(userString[index] == userString[index].match(/[a]/gi)){
        totalA++
    }else if(userString[index] == userString[index].match(/[e]/gi)){
        totalE++
    }else{
        if(userString[index] == userString[index].match(/[" "]/gi)){
            totalSpaces++
        }
    }
}

window.alert(`El total de A fueron: ${totalA}, el total de E fueron: ${totalE} y el total de espacios fueron: ${totalSpaces}`)