//destructuring: 


const fish = {
    name: 'King Hilsha',
    address: 'Chandpur',
    color: 'silver',
    phone: '01717658889',
    price: 4000
}

const phone = fish.phone
const color = fish.color
const price = fish.price
console.log(phone);
console.log(color);
console.log(price);

//object desctructuring
const { name, age } = {
    name: 'Almas',
    age: 56,
    profession: 'makeup artist'
}
console.log(name, age);

const { address } = fish
console.log(address);


//array destructuring
const [first, another] = [44, 99, 88, 456]
console.log(first, another);

const nayoks = ['sakib', 'bappi', 'raj']
const [king, lost, notun] = nayoks;

function getNames() {
    return ['Alim', 'Halim']
}

const [baba, chacha] = getNames()
console.log(baba, chacha);