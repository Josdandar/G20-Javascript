let li = document.querySelectorAll("li")
console.log(li)
li.forEach((li)=> {
    li.setAttribute("class", "item")
    li.setAttribute("id", "lista")
    li.setAttribute("class", "list__item")
    li.removeAttribute("item")
})

