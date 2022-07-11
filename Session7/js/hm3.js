// ejercicio 3 ->
// Función que pida al usuario los grados Centigrados en su localidad
// Convertirlos a grados fahrenheit
// Retornar el valor y ese valor usarlo para
// Arrojar un alert con el resultado
// -> convertTemp(25) -> La temperatura es de 77 ºF
// -> convertTemp() -> 'Faltan datos'

let askWeather = Number(prompt("Please type your weather in C"))

function turnToFarenheit(celcius){
    let fahrenheit = Number((celcius) * 9/5 + 32)
    console.log(`Weather in fahrenheit:  ${fahrenheit}`);
    return fahrenheit
}

turnToFarenheit(askWeather)


