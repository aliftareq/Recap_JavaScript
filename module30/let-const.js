//let : let it to re-assign;
//const : do not allow it to re-assign;


//example of let
let money = 25;
money = 35

console.log(money);

//example of const
const bird = 'Doyel pakhi'
// bird = 'moyna pakhi'
console.log(bird);

//but we can add something with declared value of const
const message = bird + 'ure ure beray sarakhon';
console.log(message);


const numbers = [12, 89, 65, 45];
//re-assign is not allowed
//numbers = [77, 66,55,22,99]

//we cant re-assign the whole value , but we can modify it.
numbers.push(123)
numbers[1] = 90
console.log(numbers);


//case of object
const student = {
    name: 'Mofiz',
    address: 'Rongpur'
}
//student = {name:'Mofazzal'}
student.name = 'Mofazzal'

//case of loop
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    sum = sum + number;
    console.log(number, sum);
}