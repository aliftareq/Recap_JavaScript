//problem-i

var marks = 95;



if (marks >= 90) {
    console.log("student got A+");
}
else if (marks >= 80 && marks < 90) {
    console.log("student got A");
}
else if (marks >= 70 && marks < 80) {
    console.log("student got B");
}
else if (marks >= 60 && marks < 70) {
    console.log("student got C");
}
else if (marks >= 50 && marks < 60) {
    console.log("student got D");
}
else {
    console.log("student has failed.");
}


//problem-ii

var signal = "Red";

if (signal == "Red") {
    console.log("It will be dangerous to croos the road now!");
}
else if (signal == "Yellow ") {
    console.log("You should stop");
}
else {
    console.log("You can pass the road");
}


//problem-1

var fruits = ['Apple', 'Banana', 'Orange']

var bananaIndex = fruits.indexOf('Banana')
console.log(bananaIndex);

fruits[1] = "Mango"
console.log(fruits);

fruits.pop()
fruits.push('watermelon')
console.log(fruits);


//problem-3

var a = 13;
var b = 79;
var c = 45;


// if (a > b && a > c) {
//     console.log(a, " is the largest number");
// }
// else if (b > a && b > c) {
//     console.log(b, " is the largest number");
// }
// else {
//     console.log(c, " is the largest number");
// }

//alternate
if (a > b) {
    if (a > c) {
        console.log(a, " is the largest number");
    }
    else {
        console.log(c, " is the largest number");
    }
}
else if (b > c) {
    console.log(b, ' is the largest number');
}
else {
    console.log(c, 'is the largest number');
}


var side_1 = 9;
var side_2 = 8;
var side_3 = 9;

if (side_1 == side_2 || side_1 == side_3 || side_2 == side_3) {
    console.log("this is an iso-sceles triangle");
}
else {
    console.log("this is not an iso-sceles triangle");
}
