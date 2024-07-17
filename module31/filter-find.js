
//array to filter
//struture const VariableName = array.filter(variable => condition)

const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1]

const bigNums = numbers.filter(number => number >= 20)
// console.log(bigNums);
const tiny = numbers.filter(number => number < 20)
// console.log(tiny);
const evenNumber = numbers.filter(number => number % 2 === 0)
// console.log(evenNumber);


const products = [
    { id: 1, name: 'Laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 },
]

const expensiveProducts = products.filter(products => products.price > 30000)
// console.log(expensiveProducts);



//find operation

const fives = numbers.find(number => number % 5 == 0) //return only one/first result
console.log(fives);
const fivesAll = numbers.filter(number => number % 5 == 0) //return all the value meet condition
console.log(fivesAll);