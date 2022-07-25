/*Preguntar en asesorias ki onda*/
/*Ejercicio 1*/
// 1 Menejo de envento en el boton "show Card"
// Pasos
// 1. Seleccionar el holder de la card
// 2. seleccionar quien detona el evento
// 3. agregar un listener al detonador
// 4. insertar html al holder
// 5. Opcional insertar elemento en el card para eliminarla
const clickButton = document.getElementById("clickButton")
const containerDiv = document.getElementById("containerDiv")


const clickToDo = clickButton.addEventListener("click", ()=>{
    containerDiv.innerHTML = `<div id="closeCard">
    <button class="buttonClick btn btn-danger">Eliminar</button>
    <img class= "imgStyles" src="https://codinginfinite.com/wp-content/uploads/2019/05/maxresdefault-1.jpg" >
    </div>`;

    const hideOnClick = document.querySelector(".buttonClick")
    console.log(hideOnClick)
    hideOnClick.addEventListener("click", ()=>{
        containerDiv.innerHTML = ``
    })

})



/*Ejercicio 2 */
// 2 Manejo de envento en el input "inserte texto"
// pasos
// 1. Seleccionar el holder de la card
// 2. seleccionar quien detona el evento
// 3. agregar un listener al detonador
// 4. insertar html al holder cuando se detono el evento
// 5. Opcional insertar evento en boton "limpiar campo" para limpiar el input


const inputBar = document.querySelector(".input_text")
const textDisplay = document.querySelector(".text_div")
const button = document.querySelector(".btn_clear")

inputBar.addEventListener("input", (e)=>{
    const text = e.target.value
    textDisplay.innerHTML = `Your text: ${text}`
    console.log(text)
})
/*Borra el texto del div de abajo pero no lo que aparece en el placeholder*/ 
button.addEventListener("click", ()=>{
    textDisplay.innerHTML = ``
    inputBar.innerHTML = ``
})

/*  3 Mouse Events
 Pasos
 1. Seleccionar el holder de la card
 2. seleccionar quien detona el evento
 3. agregar un listener al detonador
 4. insertar html al holder cuando se detono el evento
 5. De alguna forma limpiar el holder despues de algunos segundos. hint -> setTimeout*/


const imgDiv = document.querySelector(".img-div")
const mouseTarget = document.querySelector(".mouse_target")

const timer = ()=>{
    window.setTimeout("mouseover", 3000)
    imgDiv.innerHTML = `<div>
    <img class= "imgStyles" src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/Norway-In-February-cover-image.jpg" >
    </div>`
}
mouseTarget.addEventListener("mouseover", (timer))