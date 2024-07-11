//use of pow
const result = Math.pow(3, 8)
// console.log(result);

const num1 = 25;
const num2 = 45;


//use of abs
const gap = Math.abs(num1 - num2)

if (gap < 5) {
    // console.log('you guys can be friends');
}
else {
    // console.log('you guys stay apart');
}

//use of round

const number = 2.4598;
const fullNumber = Math.round(number)
// console.log(fullNumber);

//use of celi
const result2 = Math.ceil(number)
// console.log(result2);
const result3 = Math.floor(number)
// console.log(result3);

//use of random

// console.log(Math.random());

const random = Math.round(Math.random() * 100)
// console.log(random);

for (i = 0; i < 6; i++) {
    const random = Math.round(Math.random() * 10)
    console.log(random);
}