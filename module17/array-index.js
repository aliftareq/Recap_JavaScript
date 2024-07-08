//array index

var numbers = [45, 68, 78, 56, 89]

//get element by index
var element = numbers[2]
console.log(element);


//set element by index
numbers[1] = 77;
numbers[3] = 44;
console.log(numbers);

//position of index

var positionOfIndex = numbers.indexOf(89)
console.log("index of 89 is : ", positionOfIndex);

//if the array dont contain element will return : -1
var positionOfIndex = numbers.indexOf(179)
console.log("index of 179 is : ", positionOfIndex);