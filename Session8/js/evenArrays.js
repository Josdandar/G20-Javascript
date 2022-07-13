// * Ejercicio 1 
// * Realizar una función que reciba como parametro 1 array de numeros
// * Y devuelva un array con solo los elementos Pares de ese array
// * p.ej.
// * -> evenOnly( [1,2,3,4,18] ) -> [2,4,18]
// * -> evenOnly( [10, 2, 5] ) -> [10,2]
// * -> evenOnly() -> 'Se necesita un array'
// *
// * Pista / Hint, debemos iterar el array 


let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrayEvenFilter = (arrayInput) => {
    let evenArray = []
    for (let index = 0; index < arrayNumbers.length; index++) {
        if(arrayNumbers[index] % 2 === 0){
            evenArray.push(arrayNumbers[index])
            console.log(evenArray)
        }
    }return evenArray
} 

arrayEvenFilter(arrayNumbers)