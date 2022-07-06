let num1 = Number(prompt("Please input a number"))
let num2 = Number(prompt("Please input a number"))
let num3 = Number(prompt("Please input a number"))

let comparador = num1 > num2 && num1 > num3 ? ` El mayor es ${num1}` : num2 > num1 && num2 > num3 ? `El mayor es ${num2}` : num3 > num1 && num3 > num2 ? `El mayor es ${num3}` : 'Ingresa numeros distintos'; 

console.log(comparador)