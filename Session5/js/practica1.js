// imprimir vocales de string usando for loop
// Usando solo ciclos y condicionales 

let userString = prompt("Please input something")

for (let index = 0; index < userString.length; index++) {
    if(userString[index] == userString[index].match(/[aeiou]/gi)){
        console.log((userString[index]))
    }
    
}