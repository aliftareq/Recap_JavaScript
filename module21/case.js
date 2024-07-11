//use of upperCase and lowerCase

const userName = 'blackPink';
const userInput = 'blackPinK';

console.log(userName.toLocaleLowerCase());
console.log(userName.toUpperCase());

if (userName.toLocaleLowerCase() === userInput.toLocaleLowerCase()) {
    console.log('valid user');
}
else {
    console.log('not a valid user');
}