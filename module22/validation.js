
//example-1
function add(num1, num2) {
    if (typeof num1 == 'number' || typeof num2 == 'number') {
        return 'Please enter your input as a number';
    }
    return num1 + num2;
}

const result = add(122, '45')
// console.log(result);


function multiply(num1, num2) {
    return num1 * num2
}

const output = multiply(12 * 45)
console.log(output); //return NaN