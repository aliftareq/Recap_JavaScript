//fibonacchi series (0,1,1,2,3,5,8,13,21,34,55........)

var fibo = [0, 1]
for (i = 2; i <= 10; i++) {
    var element = fibo[i - 1] + fibo[i - 2]
    fibo.push(element)
}

console.log(fibo);