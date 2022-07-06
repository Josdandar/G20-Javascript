// imprimir vocales de string usando for loop
// Usando solo ciclos y condicionales 

let stringInput = prompt("Please type something")

for (let index = 0; index < stringInput.length; index++) {
    if(index == stringInput.match(/[aeiou]/gi)){
        console.log(index)
    }
    
}