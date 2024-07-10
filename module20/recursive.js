//factorial with recursive function

function getFactorial(number) {
    if (number == 1) {
        return 1
    }
    else {
        return number * getFactorial(number - 1)
    }
}

var result = getFactorial(5)
console.log("factor with recursive:", result);