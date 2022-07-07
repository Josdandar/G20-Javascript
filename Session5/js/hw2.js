// Ejercicio 2
// Pedir el usuario 1 número entre 1 y 100
// sumar todos los números entre el 1 y el numero ingresado
// Mandar un alert con el total
// Resolver con For, While y do While
// Por ejemplo: 5
// ->  15

let userInput = Number(prompt("Please input a number"))
let userSum = 0

for (let index = 0; index <= userInput; index++) {
    userSum += index
    
}

window.alert(userSum)