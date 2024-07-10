//problem-1

//c to f
function convertCelcioustToFarenheit(c) {
    var farenheitValue = ((9 * c) / 5) + 32
    return farenheitValue
}

var result1 = convertCelcioustToFarenheit(100)
console.log("Value in Farenheit:", result1);


//f to c
function convertFarenheitToCelcious(f) {
    var celciousValue = ((f - 32) * 5) / 9
    return celciousValue
}

var result2 = convertFarenheitToCelcious(32)
console.log("Value in celcious:", result2);
