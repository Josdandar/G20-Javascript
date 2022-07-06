// Pedir al usuario un numero del 1 al 10 e imprimir la tabla de multiplicar de ese número
// Usando loops


number = Number(prompt("Please select the number to multiply"))

for(let index = 0; index <= 10; index++){
    console.log(number, "*" , index, "=" ,number*index)
}




