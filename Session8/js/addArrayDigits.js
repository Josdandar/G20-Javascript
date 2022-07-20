// Practica
// Dado una arreglo compuesto por arreglos,
// * crea una función que calcule la suma de los arreglos
// *
// * additionMultiArr(  [ [1,2,3] , [1,3,2] , [3,2,1] ] )
// * -> 18

let arrays = [[1,1,1], [2,2,2], [3,3,3]]

const sumarArray = (input)=> {

    let arrayAccum = 0

    input.forEach(item => {
        if(item instanceof Array){
            let result = item.reduce((accum, cv) =>{
                    accum += cv 
                    return accum
    
                },0)
            arrayAccum += result
            
        }
    });
    
    return arrayAccum
}

sumarArray(arrays)
console.log(sumarArray(arrays))

/*La validacion de item instance of array es para ver si se esta entrando a un array, si fuera un numero o string no sumaria */