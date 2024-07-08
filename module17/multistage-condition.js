//multistage condition.


var myMoney = 10;
var danishPrice = 45;
var butterPrice = 35;
var toastPrice = 20;

if (danishPrice < myMoney) {
    console.log("Give a piece of danish");
}
else if (butterPrice < myMoney) {
    console.log('give me a butter-bun');
}
else if (toastPrice < myMoney) {
    console.log('give me a toast buiscuit');
}
else {
    console.log('give me a cup of tea!');
}