//findTheMax

var jim = 69;
var dela = 97;

// if (jim > dela) {
//     console.log('jim will get the cake');
// }
// else {
//     console.log('dela will get the cake');
// }


//problem-2

var jim = 69;
var dela = 97;
var chinku = 77;

if (jim > dela && jim > chinku) {
    console.log('jim will get the cake');
}
else if (dela > jim && dela > chinku) {
    console.log('dela will get the cake');
}
else {
    console.log('Chinku will get the cake');
}

//HW: write a function that will take three numbers and return the max value


function findTheMax(a, b, c) {
    var max = Math.max(a, b, c)
    return max
}

var maxValue = findTheMax(12, 13, 14)
console.log("the max value is:", maxValue);


function findTheMin(a, b, c) {
    var min = Math.min(a, b, c)
    return min
}

var minValue = findTheMin(12, 13, 14)
console.log("the min value is:", minValue);