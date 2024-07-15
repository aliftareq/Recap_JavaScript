/**
 * 
 */


//general function 
function add(first, second) {
    const total = first + second;
    return total;
}

const result = add(10, 20)
console.log(result)

//function expression
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}

// annonymous function (function without name)
const add2 = function (first, second) {
    const total = first + second;
    return total;
}


// example of function expression
function add4(first, second) {
    return first + second;
}

const add5 = function (first, second) {
    return first + second
}

//example of arrow function(single line)
const add7 = (first, second) => first + second;

//example of arrow function(multiline)
const add8 = (first, second) => {
    return first + second;
}

const result2 = add8(2, 2)
console.log(`The result is: ${result2}`);


//interview question: difference btwn arrow-function vs function expression vs function declaration.




