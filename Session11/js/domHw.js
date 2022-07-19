// Dado un arreglo de koders
// 1. Generar una lista con la clase "koders"
// 2. Agregar a cada koder en esa lista
// 3. A todos los koders agregarles la clase "item koder"

let koders =  [
   {
       name: 'Ferdinand',
       lastName: 'Bracho',
       age: 30,
       generation: 2,
       modulos: ['js','python', 'git'],
   },
   {
       name: 'Alfredo',
       lastName: 'Pi',
       age: 20,
       generation: 10,
       modulos: ['Node', 'Cloud'],
   },
   {
       name: 'Ale',
       lastName: 'Pa',
       age: 30,
       generation: 1,
       modulos: ['React'],
   }
]

/* Obteniendo el body y creando la lista */ 
let body = document.querySelector("body")
let ul = document.createElement("ul")
body.appendChild(ul)
ul.setAttribute("class","koder")


const addKodersHTML = (input)=> {
    let koderName = ''
    for (let index = 0; index < koders.length; index++) {
        koderName = koders[index].name
        let listKoder = document.createElement("li")
        ul.appendChild(listKoder)
        listKoder.textContent = koderName
        listKoder.setAttribute("class", "item_koder")
    }
}

addKodersHTML(koders)