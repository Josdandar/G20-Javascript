// Ejercicio 2.
// Dado un objeto inicial, hacer los siguientes puntos

// 1. Agregar el lenguaje 'Go' a la lista de lenguajes
// 2. Agregar fastApi en frameworks
// 3. Cambiar el nivel a 4
// 4. Eliminar la propiedad avatar
// 5. Agregar una nueva propiedad de edad y poner el valor de 30
// 6. Imprimir en consola todos los lenguajes  y frameworks dominados
// 7. Clonar el objeto en uno nuevo
// 8. Imprimir en consola el nuevo objeto

 
let koder = {
   languages: ["JavaScript", "Python", "SQL"],
   frameworks: ["django", "node", "flask"],
   isMentor: true,
   level: 3,
   avatar: "https://picsum.photos/200/300"
}


/* Agregar Go a la propiedad de languages*/
koder.languages.push("Go")

console.log(koder.languages)

