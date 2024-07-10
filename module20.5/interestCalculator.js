//calculate simple interest

//simple interest
function calculateSimpleInterest(p, n, r) {
    var simpleInterest = p * n * (r / 100);
    return simpleInterest
}

var myInterestAmount = calculateSimpleInterest(10000, 3, 8)
console.log("Your interest amount will be", myInterestAmount);


//compound interest 

function calculateCompoundInterest(p, r, n, t) {
    var compoundInterest = p * Math.pow((1 + (r / n)), (n * t))
    return compoundInterest
}

var myCompoundInterset = calculateCompoundInterest(1000, 0.05, 12, 3)
console.log("Your compound interest will be", parseFloat(myCompoundInterset.toFixed(2)));