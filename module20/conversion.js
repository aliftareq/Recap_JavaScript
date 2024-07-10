//inch to feet conversion

function inchToFeet(value) {
    var valueInFeet = value / 12;
    return valueInFeet
}

const result1 = inchToFeet(57)
console.log("Your height is:", result1, "Feet");

//mile to km conversion

function mileTokm(mile) {
    var valueInKm = mile * 1.60934;
    return valueInKm;
}

var result2 = mileTokm(3)
console.log("the distance is:", result2, "km");


