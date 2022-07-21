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

 let h1 = document.getElementsByTagName("h1")
/* Creating initial elements and inheriting them*/ 
/*We will use our koders array to fill the table*/

let table = document.createElement("table");
let tHead = document.createElement("thead");
table.appendChild(tHead);

let thName = document.createElement("th");
thName.textContent = "Name";

let thLastName = document.createElement("th");
thLastName.textContent = "Last Name";

let thAge = document.createElement("th");
thAge.textContent = "Age";

let thGeneration = document.createElement("th");
thGeneration.textContent = "Generation";

let thModule = document.createElement("th");
thModule.textContent = "Modules";

tHead.appendChild(thName);
tHead.appendChild(thLastName);
tHead.appendChild(thAge);
tHead.appendChild(thGeneration);
tHead.appendChild(thModule);

/*This makes visible our table in the body of our page*/ 
document.querySelector("body").appendChild(table);

let tBody = document.createElement("tbody");
table.appendChild(tBody);

/*Creating and setting table body elements dynamically using a loop */
/* in each loop we have to create a row with the thead titles*/ 
/*Loops help to make stuff more dynamic, without having to code if we add more people to the array */
koders.forEach((koder) => {
    /* The row were table data will be displayed*/
    let tRow = document.createElement("tr");

    let tdName = document.createElement("td");
    let tdLastName = document.createElement("td");
    let tdAge = document.createElement("td");
    let tdGeneration = document.createElement("td");
    let tdModule = document.createElement("td");

    tdName.textContent = koder.name
    tdLastName.textContent = koder.lastName
    tdAge.textContent = koder.age
    tdGeneration.textContent = koder.generation
    tdModule.textContent = koder.modulos

    /*We can use both ways as seen on the console.log to bring the data*/
    // console.log(koder.name)
    // console.log(koder["name"])

    tRow.appendChild(tdName);
    tRow.appendChild(tdLastName);
    tRow.appendChild(tdAge);
    tRow.appendChild(tdGeneration);
    tRow.appendChild(tdModule);

    console.log(tRow)
    tBody.appendChild(tRow)
})