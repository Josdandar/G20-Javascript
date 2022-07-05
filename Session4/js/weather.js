//    1. Estar en la rama de la clase
//    2. Crear archivo "weather.js" y vincularlo
//    3. Pedir al usuario que seleccione como esta el clima de su ciudad (opciones)
//        3.1 Opciones -> a)Soleado b) Lluvioso c)Nevado d)Nublado
//    4. Pedir al usuario temperatura aproximada de su ciudad en grados C (celsius)
//    5. Imprimir en consola una descripción acorde a los datos ingresados
//    Output: En tu ciudad, el dia esta soleado con una temperatura de 100 grados F (fahrenheit)

let weatherNow = prompt("How is the weather at your city?: a) Sunny b) Rainy c) Snowy d) Cloudy")
let celsiusToFaren = Number(prompt("What is the weather in C? "))
let farnheitWeather = (celsiusToFaren * 9/5 + 32); 

switch (weatherNow){
    case "Sunny":
        window.alert(`Welcome to sunny california, your tempeture is ${farnheitWeather} F`)
        break
    case "Rainy": 
        window.alert(`Another rainy day like London, ${farnheitWeather} F`)
        break
    case "Snowy":
        window.alert(`Prepare for Santa Claus, feels like christmas ${farnheitWeather} F`)
    case "Cloudy":
        window.alert(`Ta nublado ${farnheitWeather} F`)
}