// Practica Grupal 1
// Ejercicio 1
// Pedir el usuario un número entre 10 y 100
// Imprimir todos los números pares que existen entre 1 y ese número
//  p.ej. 12 -> 2,4,6,8,10,12
//  Usar loops, condicionales...
// hint -> %

// let userInput = Number(prompt("Please input a number from 10 to 100"))
// if(userInput >= 10 && userInput <= 100){
//     for (let index = 0; index < userInput; index++) {
//         if( index%2 == 0){
//             console.log(index)
//         }
        
//     }
// }

// Ejercicio 2
// Pedir al usaurio una oracion
// Imprimir un string con todas las vocales
// Imprimir un string con todas las consonantes
// Resultado de ejemplo
// p.ej. "Hola mundo"
// Consonantes -> hlmnd
// Vocales -> oauo

// let userInput = prompt("Please type something")
// let vowels = ""

// for (let index = 0; index < userInput.length; index++) {
//     if(userInput[index] == userInput[index].match(/[aeiou]/gi)){
//         vowels += userInput[index]
//     }
    
// }

// console.log(`${vowels}`)

// Ejercicio 3
//  Pedir el usuario una palabra
// Invertir esa palabra e imprimirla en consola
//  p.ej. 'Hola' -> 'aloh'
// Condicion
// Solo usando for loops

let string = prompt("Ingrese una oración");
let strReverse = "";
//console.log(str.length);

for(let i = string.length-1; i >= 0; i--){
    strReverse = strReverse + string[i];
}