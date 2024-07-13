
//cart without Quantity
const shoppingCart = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 3700 },
    { name: 'belt', price: 600 }
]


function shoppingCartCalculator(products) {
    let cost = 0;
    for (let i = 0; i < products.length; i++) {
        cost = cost + products[i].price
    }
    return cost
}

const totalCost = shoppingCartCalculator(shoppingCart)
console.log("Your total cost is: ", totalCost);

//shoppingCart with quantity
const shoppingCart2 = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 3 },
    { name: 'pant', price: 3700, quantity: 15 },
    { name: 'belt', price: 600, quantity: 2 }
]

function shoppingCartCalculator2(products) {
    let cost = 0;
    for (let i = 0; i < products.length; i++) {
        cost = cost + (products[i].price * products[i].quantity)
    }
    return cost
}

const totalCost2 = shoppingCartCalculator2(shoppingCart2)
console.log("Your total cost is: ", totalCost2);