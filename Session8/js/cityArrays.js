/**
* Escribir una función
* Reciba como parametro un array de ciudades
* Retornar las ciudades capitalizadas
* capitalize(['méxicO','RIo', 'Los AngelEs', 'esTAMBUL])
* -> ['México','Rio', 'Los Angeles','Estambul']
* Usar el metodo de array ForEach
*/
let citiesArray = ['mExIcO CITY', 'OSLo','Helsinki','TOKYO']

const capitalizeCities = (inputArray) => {
    let citiesCapitalized = []

    inputArray.forEach(city => {
        let cityTransform = city[0].toUpperCase() + city.slice(1).toLowerCase()
        console.log(cityTransform)
        citiesCapitalized.push(cityTransform)
    });
    console.log(citiesCapitalized)
    return citiesCapitalized
}

capitalizeCities(citiesArray)