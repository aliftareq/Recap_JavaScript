//find the tallest person

//soln-1:
function findTallest(array) {
    var tallest = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > tallest) {
            tallest = array[i]
        }
    }

    return tallest;
}

var tallPerson = findTallest([12, 47, 34, 78, 32])
console.log('the tallest person height is:', tallPerson);


//alternate soln:2
function findTallest2(array) {
    var tallest2 = Math.max(...array)
    return tallest2
}

var tallPerson2 = findTallest2([1, 2, 3, 4, 5])
console.log('the tallest person height got: ', tallPerson2);