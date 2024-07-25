const age = 5;
let count = 7;
count = 8;

const myself = {
    name: 'alif',
    comapany: 'vx dev ltd',
    position: 'web developer'
}

const text = `This is ${myself.name}, i work as a ${myself.position} in ${myself.comapany}`;
// console.log(text);

const quotent = number => number / 5;
// console.log(quotent(10));

const twoParamArrow = (num1, num2) => (num1 + 2) * (num2 + 2);
// console.log(twoParamArrow(2, 3));

const threeParamArrow = (a, b, c) => a * b * c;
// console.log(threeParamArrow(1, 2, 3));

const multilineLineArrrow = (a, b) => {
    let c = a + 2;
    let d = b + 2;
    let result = c * d;
    return result;
}
// console.log(multilineLineArrrow(2, 4));

const array = [1, 2, 3, 4, 5]

const newArray = array.map(num => num * 5)
// console.log(newArray);

const array2 = [1, 4, 6, 8, 9, 3, 5, 56, 23, 45, 67, 56]
const oddNumsArray = array2.filter(num => num % 2 != 0)
// console.log(oddNumsArray);


const products = [
    {
        name: "TV",
        brand: 'walton',
        price: 5500,
    },
    {
        name: "Mobile",
        brand: 'Samsung',
        price: 5000,
    },
    {
        name: "laptop",
        brand: 'Dell',
        price: 55000,
    },
]


const myProduct = products.find(product => product.price == 5000)
// console.log(myProduct);


const car = {
    name: 'X corolla',
    brand: 'Toyota',
    price: 2000000,
    origin: 'japan'
}

const { name, price } = car;
console.log(name, price);

const [, , three] = [1, 2, 3, 4, 5]
console.log(three);
