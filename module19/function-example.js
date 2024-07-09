//example of different types of function

/*
****structure***
function functionName(parameters){
        body
    retrun value
}

var variableName = functionName(parameter)

*/


//example-1

function getAvarage(assignment1, assignment2, assignment3) {
    var total = assignment1 + assignment2 + assignment3;
    var avarage = total / 3;
    return avarage;
}

var assignment1Marks = 60;
var assignment2Marks = 58;
var assignment3Marks = 59;

var myAvarage = getAvarage(assignment1Marks, assignment2Marks, assignment3Marks)
console.log("My current avg score", myAvarage);


//example-2

function add(num1, num2) {
    var sum = num1 + num2
    return sum;
}

var result1 = add(12, 13);
var result2 = add(35, 7);
var finalRestlt = add(result1, result2);
console.log("final result will be: ", finalRestlt);

