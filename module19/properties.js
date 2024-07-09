var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}


// console.log(shoppingCart);

//accessing value throught properties in differnet ways

var penCount = shoppingCart.pen;
// console.log(penCount);

var keyboardCount = shoppingCart["keyboard"]
// console.log(keyboardCount);

//accessing direct properties
var properties = Object.keys(shoppingCart)
// console.log(properties);

//accessing direct values
var propertyValues = Object.values(shoppingCart)
// console.log(propertyValues);


//accessing values through property as variable
var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName]
// console.log(propertyName, propertyValue);

//set propertyValues
console.log(shoppingCart);
shoppingCart.mouse = 15;
console.log(shoppingCart);