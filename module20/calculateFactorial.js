//factorial with for loop
function findFactorial(number) {
    var product = 1;
    for (i = 1; i <= number; i++) {
        product = product * i;
    }

    return product;
}

var result = findFactorial(4)
// console.log("the factorial is:", result);


//factorial using while loop

function findFactorial2(number) {
    var factor = 1;
    var i = number
    while (i >= 1) {
        factor = factor * i
        i--
    }
    return factor
}

var result2 = findFactorial2(5)
console.log("the result of while loop factorial", result2);