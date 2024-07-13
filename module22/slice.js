//use of slice function(return original array)

const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87]
const partial1 = friends.slice(2, 5) //(startInd, endInd)
console.log(partial1);
console.log(friends);

//use of splice function (dont return original array)
const partial2 = friends.splice(2, 3, 99, 55, 777) //(startInd, how_many, ...numbers_to_replace)
console.log(partial2);
console.log(friends);