/* Practica
 función con .reduce()
 Dado un array de numeros, obtener la suma de solo los elementos positivos
 addAllPositives( [ 1, -4, 12, 0, -3, 29, -150] )
 -> 42 */
let numberArray = [1, -4, 12, 0, -3, 29, -150]
let addedNumbers = 0
const addPositive = (input) => {
    let positiveAccum = 0

    let addedNumbers = input.reduce((accum, currentValue)=>{
        if(currentValue > 0){
            positiveAccum += currentValue
            return positiveAccum 
        }

    },0)
    return positiveAccum
}

addedNumbers = addPositive(numberArray)
console.log(addedNumbers)
