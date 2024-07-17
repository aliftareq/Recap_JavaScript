const findSquareAvgOfArrayElement = (arr) => {
    let sumOfSquaredNumber = 0;
    for (let num of arr) {
        let newNum = num * num
        sumOfSquaredNumber = sumOfSquaredNumber + newNum
    }
    const avgOfSquaredNumber = sumOfSquaredNumber / arr.length
    return avgOfSquaredNumber;
}

console.log(findSquareAvgOfArrayElement([1, 2, 3, 4]));