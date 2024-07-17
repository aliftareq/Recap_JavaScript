//map > return an array
//forEach > doesn't return anything only do the operation
//filter > return the value whiches meet the condition
//find > return the only/first value which meet the condition


//reduce => arr.reduce(accumulatorFunction, initialValue)
//accumulator function use two parameter()
//return a final value

const numbers = [1, 2, 3, 4, 5]
const total = numbers.reduce((previous, current) => {
    console.log(previous, current)
    return previous + current;
}, 0)
console.log(total);

