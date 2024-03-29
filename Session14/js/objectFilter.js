// Declarar (y probar) una funcion que dado un string, nos filte los usaurios contenido en un array
// Buscar las coincidencias en los campos -> "name" "username" "email" 

let users = [
   {
     "id": 1,
     "name": "Brad Graham",
     "username": "Bret",
     "email": "Sincere@april.biz",
     "address": {
       "street": "Kulas Light",
       "suite": "Apt. 556",
       "city": "Gwenborough",
       "zipcode": "92998-3874",
       "geo": {
         "lat": "-37.3159",
         "lng": "81.1496"
       }
     },
     "phone": "1-770-736-8031 x56442",
     "website": "hildegard.org",
     "company": {
       "name": "Romaguera-Crona",
       "catchPhrase": "Multi-layered client-server neural-net",
       "bs": "harness real-time e-markets"
     }
   },
   {
     "id": 2,
     "name": "Brad fox",
     "username": "Bret",
     "email": "Sincere@april.biz",
     "address": {
       "street": "Kulas Light",
       "suite": "Apt. 556",
       "city": "Gwenborough",
       "zipcode": "92998-3874",
       "geo": {
         "lat": "-37.3159",
         "lng": "81.1496"
       }
     },
     "phone": "1-770-736-8031 x56442",
     "website": "hildegard.org",
     "company": {
       "name": "Romaguera-Crona",
       "catchPhrase": "Multi-layered client-server neural-net",
       "bs": "harness real-time e-markets"
     }
   },
   {
     "id": 3,
     "name": "Ervin Howell",
     "username": "Antonette",
     "email": "Shanna@melissa.tv",
     "address": {
       "street": "Victor Plains",
       "suite": "Suite 879",
       "city": "Wisokyburgh",
       "zipcode": "90566-7771",
       "geo": {
         "lat": "-43.9509",
         "lng": "-34.4618"
       }
     },
     "phone": "010-692-6593 x09125",
     "website": "anastasia.net",
     "company": {
       "name": "Deckow-Crist",
       "catchPhrase": "Proactive didactic contingency",
       "bs": "synergize scalable supply-chains"
     }
   },
   {
     "id": 4,
     "name": "Clementine Bauch",
     "username": "Samantha",
     "email": "Nathan@yesenia.net",
     "address": {
       "street": "Douglas Extension",
       "suite": "Suite 847",
       "city": "McKenziehaven",
       "zipcode": "59590-4157",
       "geo": {
         "lat": "-68.6102",
         "lng": "-47.0653"
       }
     },
     "phone": "1-463-123-4447",
     "website": "ramiro.info",
     "company": {
       "name": "Romaguera-Jacobson",
       "catchPhrase": "Face to face bifurcated interface",
       "bs": "e-enable strategic applications"
     }
   },
   {
     "id": 5,
     "name": "Patricia Lebsack",
     "username": "Karianne",
     "email": "Julianne.OConner@kory.org",
     "address": {
       "street": "Hoeger Mall",
       "suite": "Apt. 692",
       "city": "South Elvis",
       "zipcode": "53919-4257",
       "geo": {
         "lat": "29.4572",
         "lng": "-164.2990"
       }
     },
     "phone": "493-170-9623 x156",
     "website": "kale.biz",
     "company": {
       "name": "Robel-Corkery",
       "catchPhrase": "Multi-tiered zero tolerance productivity",
       "bs": "transition cutting-edge web services"
     }
   },
   {
     "id": 6,
     "name": "Patricia Jones",
     "username": "Karianne",
     "email": "Julianne.OConner@kory.org",
     "address": {
       "street": "Hoeger Mall",
       "suite": "Apt. 692",
       "city": "South Elvis",
       "zipcode": "53919-4257",
       "geo": {
         "lat": "29.4572",
         "lng": "-164.2990"
       }
     },
     "phone": "493-170-9623 x156",
     "website": "kale.biz",
     "company": {
       "name": "Robel-Corkery",
       "catchPhrase": "Multi-tiered zero tolerance productivity",
       "bs": "transition cutting-edge web services"
     }
   },
   {
     "id": 7,
     "name": "Chelsey Dietrich",
     "username": "Kamren",
     "email": "Lucio_Hettinger@annie.ca",
     "address": {
       "street": "Skiles Walks",
       "suite": "Suite 351",
       "city": "Roscoeview",
       "zipcode": "33263",
       "geo": {
         "lat": "-31.8129",
         "lng": "62.5342"
       }
     },
     "phone": "(254)954-1289",
     "website": "demarco.info",
     "company": {
       "name": "Keebler LLC",
       "catchPhrase": "User-centric fault-tolerant solution",
       "bs": "revolutionize end-to-end systems"
     }
   },
   {
     "id": 8,
     "name": "Mrs. Dennis Schulist",
     "username": "Leopoldo_Corkery",
     "email": "Karley_Dach@jasper.info",
     "address": {
       "street": "Norberto Crossing",
       "suite": "Apt. 950",
       "city": "South Christy",
       "zipcode": "23505-1337",
       "geo": {
         "lat": "-71.4197",
         "lng": "71.7478"
       }
     },
     "phone": "1-477-935-8478 x6430",
     "website": "ola.org",
     "company": {
       "name": "Considine-Lockman",
       "catchPhrase": "Synchronised bottom-line interface",
       "bs": "e-enable innovative applications"
     }
   },
   {
     "id": 9,
     "name": "Kurtis Weissnat",
     "username": "Isaac.Skiles",
     "email": "Telly.Hoeger@billy.biz",
     "address": {
       "street": "Rex Trail",
       "suite": "Suite 280",
       "city": "Howemouth",
       "zipcode": "58804-1099",
       "geo": {
         "lat": "24.8918",
         "lng": "21.8984"
       }
     },
     "phone": "210.067.6132",
     "website": "elvis.io",
     "company": {
       "name": "Johns Group",
       "catchPhrase": "Configurable multimedia task-force",
       "bs": "generate enterprise e-tailers"
     }
   },
   {
     "id": 10,
     "name": "Nicholas Runolfsdottir V",
     "username": "Maxime_Nienow",
     "email": "Sherwood@rosamond.me",
     "address": {
       "street": "Ellsworth Summit",
       "suite": "Suite 729",
       "city": "Aliyaview",
       "zipcode": "45169",
       "geo": {
         "lat": "-14.3990",
         "lng": "-120.7677"
       }
     },
     "phone": "586.493.6943 x140",
     "website": "jacynthe.com",
     "company": {
       "name": "Abernathy Group",
       "catchPhrase": "Implemented secondary concept",
       "bs": "e-enable extensible e-tailers"
     }
   },
   {
     "id": 11,
     "name": "Glenna Reichert",
     "username": "Delphine",
     "email": "Chaim_McDermott@dana.io",
     "address": {
       "street": "Dayna Park",
       "suite": "Suite 449",
       "city": "Bartholomebury",
       "zipcode": "76495-3109",
       "geo": {
         "lat": "24.6463",
         "lng": "-168.8889"
       }
     },
     "phone": "(775)976-6794 x41206",
     "website": "conrad.com",
     "company": {
       "name": "Yost and Sons",
       "catchPhrase": "Switchable contextually-based project",
       "bs": "aggregate real-time technologies"
     }
   },
   {
     "id": 12,
     "name": "Clementina DuBuque",
     "username": "Moriah.Stanton",
     "email": "Rey.Isaac@karina.biz",
     "address": {
       "street": "Kattie Turnpike",
       "suite": "Suite 198",
       "city": "Lebsackbury",
       "zipcode": "31428-2261",
       "geo": {
         "lat": "-38.2386",
         "lng": "57.2232"
       }
     },
     "phone": "024-648-3804",
     "website": "ambrose.net",
     "company": {
       "name": "Hoeger LLC",
       "catchPhrase": "Centralized empowering task-force",
       "bs": "target end-to-end models"
     }
   },
   {
     "id": 13,
     "name": "Jorge Camarillo",
     "username": "jorge.Camarillo",
     "email": "jorge.camarillo@kodemia.mx",
     "address": {
       "street": "Kattie Turnpike",
       "suite": "Suite 198",
       "city": "Lebsackbury",
       "zipcode": "31428-2261",
       "geo": {
         "lat": "-38.2386",
         "lng": "57.2232"
       }
     },
     "phone": "024-648-3804",
     "website": "ambrose.net",
     "company": {
       "name": "Hoeger LLC",
       "catchPhrase": "Centralized empowering task-force",
       "bs": "target end-to-end models"
     }
   },
   {
     "id": 14,
     "name": "Isaac luna",
     "username": "Isaac.luna",
     "email": "isaac.luna@gmail.com",
     "address": {
       "street": "Kattie Turnpike",
       "suite": "Suite 198",
       "city": "Lebsackbury",
       "zipcode": "31428-2261",
       "geo": {
         "lat": "-38.2386",
         "lng": "57.2232"
       }
     },
     "phone": "024-648-3804",
     "website": "ambrose.net",
     "company": {
       "name": "Hoeger LLC",
       "catchPhrase": "Centralized empowering task-force",
       "bs": "target end-to-end models"
     }
   }
 ]

 /*Creando funcion que filtre por coincidencia en "name" "username" "email" */

/*Creamos una funcion donde se filtra por nombre, usuario y correo y si recibe una letra que coincida dara un resultado */ 
const filterUsers = (str) => {
    let strFinal = str.toLowerCase()
    let filteredUsers = users.filter((user)=> {

        if(
            user.name.toLocaleLowerCase().match(strFinal) ||
            user.username.toLocaleLowerCase().match(strFinal) ||
            user.email.toLocaleLowerCase().match(strFinal)
            ) {
            return true
        }

    })
    
    return filteredUsers
}

/* Pasar el valor del input como parametro a la funcion filterusers y como resultado devuelve array imprimir una carta por cada elemento del array*/

const buttonClick = document.querySelector(".find_user")
const searchBar = document.querySelector(".input_text")
const addUserCards = document.querySelector("#list_users")
let resultValue



searchBar.addEventListener("input", (e)=>{
  resultValue = filterUsers(searchBar.value)
  console.log(resultValue)
})


/* searchedValue es un objeto, entonces acceder a propiedades necesarias y renderizar en html*/ 
/*Spread operator me deconstruye y permite trabajar con lo que hay dentro del array */
/*Lo que me resulte almacenarlo en una variable para que no se sobreescriba*/
buttonClick.addEventListener("click",(inputValue)=>{
  let resultValueArray = []
  resultValueArray = [...resultValue]
  resultValueArray.forEach((item, index)=>{
    console.log(resultValueArray)
    addUserCards.innerHTML = `
    <p> hola</p>
    `
  })
  
})



