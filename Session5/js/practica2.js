// Practica2
// imprimir solo las consonantes de un string usando for loop
// ojo ciclos y condicionales 



let userString = prompt("Please input something")

for (let index = 0; index < userString.length; index++) {
    if(userString[index] != userString[index].match(/[aeiou]/gi)){
        console.log((userString[index]))
    }
    
}