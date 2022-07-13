/**
* Ejercicio 2 *Opcional
* Función que reciba como parámetro una array de strings
* y devuelva el primer y último carácter de cada string
* p.ej.
* -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
*
* Pista / Hint, debemos iterar el array 
*/
let stringToArray = prompt("Please input a string")

const firstAndLast = (inputArray) => {
    let stringArray =  stringToArray.split(" ")
    let falResult = []
    for (let index = 0; index < stringArray.length; index++) {
        falResult.push(stringArray[index].charAt(0) + stringArray[index].slice(-1))
        console.log(falResult)
    }return falResult
    
}

firstAndLast(stringToArray)