/**
 * Default parameter : function Default parameter allow named parameters to be initialized with default values if no value or undefined is passed.
 */


//before ES6
/*function add(first, second) {
    console.log(first, second);
    second = second || 0;
    // if (second === undefined) {
    //     second = 0;
    // }
    const total = first + second;
    return total;
}
*/


//after ES6 -> 
//example of default parameter
function add(first, second = 0) {
    const total = first + second;
    return total;
}
const result1 = add(10);
console.log(result1);

//example-2
function fullName(first, last = "Chowdhury") {
    const name = first + " " + last;
    return name;
}

const result2 = fullName('Aslam')
console.log(result2);