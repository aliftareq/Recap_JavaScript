const numbers = [12, 56, 87, 44]

const half = numbers.map(n => n / 2)
const thirds = numbers.map(n => n / 3)
// console.log(half);



//array map operation on string
const friends = ['Tom hanks', 'Tom cruise', 'Tom brady', 'Tom Solaiman']

const firstLetter = friends.map(friend => friend[0])
// console.log(firstLetter);
const nameLength = friends.map(friend => friend.length)
// console.log(nameLength);


//array map operation on object
const products = [
    { id: 1, name: 'Laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 },
]

const items = products.map(product => product.name)
const prices = products.map(product => product.price)
// console.log(items);
// console.log(prices);


