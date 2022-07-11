// Ejercicio 1 ->
// Función que pida una palabra al usuario
// Invierta la palabra
// y la retorna, almacenamos ese retorno en una variable y al interpolamos en un alert usando template literals
// reversedString('hola') -> 'aloh'


let askWord = prompt("Please input a word")

function reversedWord(word){
    let reversedWord = ""
    for (let index = word.length-1 ; index >= 0; index--) {
        reversedWord += word[index]
        
    }
    console.log(reversedWord)
    return reversedWord

}

reversedWord(askWord)