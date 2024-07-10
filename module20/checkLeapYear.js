function checkLeapYear(year) {
    if (year % 400 == 0) {
        return 'this is leap year'
    }
    else if (year % 4 == 0 && year % 100 != 0) {
        return 'this is leap year'
    }
    else {
        return 'not leap year'
    }

}


var result1 = checkLeapYear(1993);
var result2 = checkLeapYear(1700);
var result3 = checkLeapYear(2008);

console.log(result1);
console.log(result2);
console.log(result3);
