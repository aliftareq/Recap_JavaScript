
const array = [12, 45, 23, 67, -32, 28, -90, 37]

function findingPositiveValue(arr) {
    const newArray = [];
    for (const number of arr) {
        if (number > 0) {
            newArray.push(number)
        }
        else {
            break;
        }
    }
    return newArray
}

const result = findingPositiveValue(array)
console.log(result);