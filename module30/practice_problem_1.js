const getSum = (a, b, c) => {
    const sum = a + b + c;
    return sum;
}

console.log(getSum(1, 2, 3));


const sentence = `I am a web developer.
I love to code.
I love to eat biriyani.
`
console.log(sentence);


const makeSum = (a, b = 2) => {
    const sum = a + b;
    return sum
}

console.log(makeSum(1));