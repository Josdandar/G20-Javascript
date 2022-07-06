// Tomar un string del usaurio
// imprimir en consola el numero de caracteres que tiene esa cadena
// Imprimir cuantas vocales estan presentes
// Imprimri cada uno de los las palabras que hay ('hola koder') => ['hola', 'koders'}

let userString = prompt("Please input something")

console.log(userString.replaceAll(' ', '' ).length)
console.log(userString.match(/[aeiou]/gi).length)
console.log(userString.split(" "))