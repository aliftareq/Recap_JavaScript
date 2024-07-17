//forEach operation

const friends = ['Tom hanks', 'Tom cruise', 'Tom brady', 'Tom Solaiman']
const products = [
    { id: 1, name: 'Laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 },
]

const prices = products.forEach(product => product.price)
console.log(prices);

//forEach do the same thing as array map but doesnt return anything