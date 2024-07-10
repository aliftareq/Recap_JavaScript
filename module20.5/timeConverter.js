//hour to minute
function timeConverter(h) {
    var minute = h * 60;
    return minute;
}

var minute = timeConverter(24)
console.log("the time in minute is:", minute);


//hour to second
function timeConverter2(h) {
    var second = h * 60 * 60;
    return second;
}

var second = timeConverter2(24)
console.log("the time in second is:", second);