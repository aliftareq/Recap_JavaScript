// finding sum using loop


// let sum = 0;

//incremental
// for (i = 0; i <= 5; i++) {
//     sum = sum + i;
// }

//decremental
// for (i = 5; i >= 0; i--) {
//     sum = sum + i
// }

// console.log(sum);


function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1);
}

const result = sum(5)
console.log(result);

/*
**How Recursive function works**
    sum(5)
    5 + sum(4)
    5 + 4 + sum(3)
    5 + 4 + 3 + sum(2)
    5 + 4 + 3 + 2 + sum(1)
    5 + 4 + 3 + 2 + 1;
*/

// recursive function : A function that call itself is know as a recursive function
// and the approach is called recursion.