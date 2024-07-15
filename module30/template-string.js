/**
 * Template literals : Template literals are enclosed by backTick(`) instead of double or single qoutes. allowing for the following
 * 1. multiline String.
 * 2. string interpolation.
 */

//examples
const person = 'Adam Sandler'; //single quote
const person2 = "Ben White"; //double quote
const person3 = `Donald Trump` //back-tick


const multiline = 'First line of code'
    + 'second line of text'
    + 'third line of text'
    + 'fourth line of String'

// console.log(multiline);

//use of caret or back-tick

const newMultiline = `First line of text
second line of text
third line of text
fourth line of text
`
// console.log(newMultiline);


const a = 20;
const b = 30;

const summury = 'sum of:' + a + 'and' + b + 'is:' + (a + b)
// console.log(summury);

const newSummury = `sum of ${a} and ${b} is: ${a + b}`
console.log(newSummury);

const nums = [78, 98, 45, 12, 6, 444]
const arrayText = `the length of array is ${nums.length}`
console.log(arrayText);
