function checkLeapYear(y) {
    if ((y % 400 == 0) || (y % 4 == 0 && y % 100 != 0)) {
        return true
    }
    else {
        return false
    }
}

var result = checkLeapYear(2023)
console.log(result);