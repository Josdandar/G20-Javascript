const prueba = {
    propiedad1: "hola",
    propiedad2: "adios"
}

Object.seal(prueba)

prueba.propiedad3 = "holi"
prueba.propiedad1 = "hi"
delete prueba.propiedad1
console.log(prueba)