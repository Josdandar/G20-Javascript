// Ejercicio 3 de la clase pasada pero en Funcion 
// pedir una oracion al usuario
// Contar las letras "a", "e" y espacios,
// Resolver con For, While y do While
// Por ejemplo 'hola kodErs'
//  ->  A -> 1
//  ->  E -> 1
//  ->  Espacios -> 1
//REFACTORIZACION DE EJERCICIO ANTERIOR A ARROW FUNCTION 

let userString = prompt("Please input a sentence")

const matchWithString = input =>{
    let totalA = 0
    let totalE = 0
    let totalSpaces = 0
    for (let index = 0; index < input.length; index++) {
                if(input[index] == input[index].match(/a/i)){
                    totalA++
                }else if(input[index] == input[index].match(/[e]/gi)){
                    totalE++
                }else{
                    if(input[index] == input[index].match(/[" "]/gi)){
                        totalSpaces++
                    }
                }
            }window.alert(`El total de A fueron: ${totalA}, el total de E fueron: ${totalE} y el total de espacios fueron: ${totalSpaces}`)
}

matchWithString(userString)