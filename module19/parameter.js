
//decalring function with parameter

// function bringSingara(money) {
//     console.log("Please, bring some singara of taka : ", money);
// }

// bringSingara() //will return undefined
// bringSingara(100)
// bringSingara("eksho takar")

//decalring function with parameter and variable

function bringSingara(money) {
    console.log("taka disen: ", money);
    console.log("Ei nen singara");
}

var taka = 300;
// bringSingara(taka)


//declaring function with multiple parameter.

function add(num1, num2) {
    console.log("going to add: ", num1, num2);
}

// add()
// add(5, 6)

//finding sum
function sum(a, b, c, d, e) {
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log(sum);
}

sum();
sum(1, 2, 3);
sum(1, 2, 3, 4, 5);