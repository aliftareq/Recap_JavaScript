function checkOddEven(age) {
    if (age % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

var result = checkOddEven(24)
console.log(result);