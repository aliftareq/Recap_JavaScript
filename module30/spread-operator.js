//spread operator: JavaScript spread operator(...) allow us to quickly copy all or part of an existing array or object into another array.

const max = Math.max(12, 85, 999, 78)
// console.log(max);

const numbers = [12, 85, 999, 78]

//applying spread-operator(...)
const largest = Math.max(...numbers)
// console.log(largest);


//multiple array(referential integrity)
const numbers2 = numbers
// numbers.push(55)
// numbers2.push(777)
// console.log(numbers);
// console.log(numbers2);


//solution of referential integrity
const numbers3 = [...numbers]
numbers.push(55)
numbers3.push(777)
console.log(numbers);
console.log(numbers3);


//more example of spread operator
const numbers4 = [...numbers]
const numbers5 = [44, 78, ...numbers, 111, 33]