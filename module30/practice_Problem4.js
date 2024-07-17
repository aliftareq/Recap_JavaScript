const findMaxValueOfArray = (arr1, arr2) => {
    const newArray = [...arr1, ...arr2]
    const largestNumber = Math.max(...newArray)
    return largestNumber
}

console.log(findMaxValueOfArray([1, 2, 3], [4, 5, 6]));