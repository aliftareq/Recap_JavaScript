
//concept swaping variable.

let first = 5;
let second = 7;
console.log(first, second);

//wrong approach
// first = second
// second = first
// console.log(first, second);

//use of temp(right approach -1 )
// const temp = first;
// first = second
// second = temp;
// console.log(first, second);

//desctructuring = right approach - 2 
[first, second] = [second, first]
console.log("this", first, second);
