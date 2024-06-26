// Create a function that will convert from Fhrenheit to Celsius

function toCelsius (fahrenheit) {
    var temp = (fahrenheit - 32) * (5/9)
    return temp

}

result = toCelsius(80);
console.log(result)