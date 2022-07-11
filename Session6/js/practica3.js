// Ejercicio 2
// * Pedir el usuario 1 numero entre 1 y 100
// * sumar todos los números entre el 1 y este numero
// * Mandar un alert con el  total
// * Resolver con cualquiera de: For, While y do While
// * p.ej. 5
// * ->  15

let numeroPedido = Number(prompt("Ingresa un numero"))

function sumaNumero (numero){
    let suma = 0
    if(numero >= 1 && numero <= 100){
        for (let index = 0; index <= numero; index++) {
            suma += index
            console.log(suma)
        }
    }return suma
}

sumaNumero(numeroPedido)
