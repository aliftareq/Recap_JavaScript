
//difference btwn object & Array;

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}
var shoppingItems = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes']

//getting keys and values individually
const keys = Object.keys(shoppingCart)
// console.log(keys);

const values = Object.values(shoppingCart)
// console.log(values);

//getting  keys and values together

console.log("entries", Object.entries(shoppingCart));

//my soln
for (i = 0; i < keys.length; i++) {

    // console.log(keys[i], ":", shoppingCart[keys[i]]);
}

//jhankar bhai soln
for (i = 0; i < keys.length; i++) {
    var propertyName = keys[i]
    var propertyValue = shoppingCart[propertyName]
    // console.log(propertyName, "::", propertyValue);
}

//applying 'for in' loop

for (var propertyName in shoppingCart) {
    // console.log(propertyName, shoppingCart[propertyName]);
}

