
// map -> morph array piece by piece

const numbers = [2, 8, 4, 6, 3]

function getDoubles(arr) {
    const output = []
    for (const number of arr) {
        const double = doubleIt(number)
        output.push(double)
    }
    return output;
}

/*function doubleItOld(number) {
    return number * 2
}*/

const doubleIt = num => num * 2;

const result = getDoubles(numbers)
console.log("result", result);

//array map example
const makeDouble = numbers.map(doubleIt)
const makeDoubleDirect = numbers.map(number => number * 2)
console.log(makeDouble);
const fiveTimes = numbers.map(number => number * 5)
console.log(fiveTimes);