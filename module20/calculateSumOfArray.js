function calculateSumOfArray(array) {
    var total = 0
    for (num in array) {
        // console.log(array[num]);
        total += parseInt(array[num])
    }
    return total;
}

var result = calculateSumOfArray([1, 2, 3, 4])
// console.log("total of elements is:", result);

//alternate 
function calculateSumOfArray2(array) {
    var total = 0;
    for (i = 0; i < array.length; i++) {
        total = total + array[i]
    }
    return total
}

var result2 = calculateSumOfArray2([1, 2, 3, 4, 5])
// console.log("sum of this array is:", result2);

//problem - 3

function findOddSum(array) {
    var total = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            total = total + array[i]
        }
    }
    return total
}

var result3 = findOddSum([5, 7, 8, 10, 45, 30])
var result4 = findOddSum([12, 65, 45, 78, 32, 45, 91])
console.log("odd sum are:", result3, result4);