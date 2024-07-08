//use of && , || operator;


var isGraduate = true;
var salary = 75000;
var car = 0;


// if (isGraduate === true) {
//     console.log("lets get married");
// }
// else {
//     console.log("you cant get married");
// }

//use of &&(AND) operator.
if (isGraduate == true && salary > 50000) {
    console.log("You are able to get married");
}
else {
    console.log("You are unable to get married");
}

if (isGraduate == true && salary > 50000 && car >= 1) {
    console.log("You are able to get married");
}
else {
    console.log("You are unable to get married");
}


//use of ||(OR) operator
if (isGraduate == true || salary > 50000 || car >= 1) {
    console.log("You are able to get married");
}
else {
    console.log("You are unable to get married");
}

//using && , || operator together
if ((isGraduate == true && salary > 50000) || car >= 1) {
    console.log("You are able to get married");
}
else {
    console.log("You are unable to get married");
}