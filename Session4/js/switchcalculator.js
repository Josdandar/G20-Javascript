let number1 = Number(prompt("Please input a number"))
let number2 = Number(prompt("Please input another number"))
let operation = prompt("Select the operation: + - *")
let result

switch (operation) {
    case "+": 
        result = number1 + number2
        window.alert(result)
        break;
    case "-":
        result = number1 - number2
        window.alert(result)
        break;
    case "*":
        result = number1 * number2
        window.alert(result)
        break;
}
