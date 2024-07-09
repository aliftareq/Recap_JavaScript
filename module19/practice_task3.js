//problem - 1
function foo() {
    console.log('foo');
}

function bar() {
    console.log('bar');
}

// foo(bar())


//problem -2 
function make_avg(a, b, c) {
    var avg = (a + b + c) / 3
    return avg
}

var avgValue = make_avg(10, 20, 30)
// console.log(avgValue);

//practice - 3(advance)
function make_avg_array(array, array_length) {
    var total = 0;
    for (i = 0; i < array_length; i++) {
        total = total + array[i]
    }

    var avg = total / array_length;
    return avg
}

var numbers = [20, 20, 20]
var numbersLength = numbers.length

var avgOfArray = make_avg_array(numbers, numbersLength)
// console.log(avgOfArray);


//number - 4
function odd_even(number) {
    if (number % 2 == 0) {
        console.log(number, ' is an even number');
    }
    else {
        console.log(number, ' is a odd number');
    }

}

// odd_even(5)

function odd_even(number) {
    if (number % 2 == 0) {
        return 'even number';
    }
    else {
        return 'odd number';
    }

}

var result = odd_even(5)
console.log(result);