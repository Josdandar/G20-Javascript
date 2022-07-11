// Función que reciba una numero e imprima las tablas de ese numeri, validamos que ese numero este entre 1 y 10


let inputNumber = Number(prompt("Please input a number"))

const multiply = (number) => {
    if(number >= 1 && number <= 10){
        for(let index = 0; index <= 10; index++){
            console.log(number, "*" , index, "=" ,number*index)
        }
    }
}

multiply(inputNumber)