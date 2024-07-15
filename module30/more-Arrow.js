//example of single line arrow function
const add = (first, second) => first + second;
const getFullName = (fName, lName) => fName + " " + lName;
const multiply = (a, b) => a * b;
const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

const result = multiply(7, 8)
console.log(result)

//arrow function without parameter
const getPie = () => 3.1416


//arrow function with single parameter
const doubleIt = (num) => num * 2;

//one parameter simple version(without bracket)
const fiveTimes = num => num * 5;



//multiline arrow function(we must use return keyword in multiline arrow function, it doesn't return something by default.)
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2
    return result;
}


