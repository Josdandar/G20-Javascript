// Ejercicio 1 
// * Función que reciba una palabra
// * Retorna la palabra invertida
// * La reversa del string lo haremos usando métodos de array
// *  hint :  a un string no podemos aplicarle métodos array pero hay métodos de string que nos devuelve un array
// *
// * reverseStr('hola mundo')
// * -> 'odnum aloh

let inputString = prompt("Please input something")

const wordReverser = (input) => {
    let stringToArray = inputString.split(" ")
    let reversedArray = []
    console.log(stringToArray.reverse())
}

wordReverser(inputString)