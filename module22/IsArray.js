const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = { id: 121, class: 11, name: 'agun' };
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2) {
    return num1 + num2;
}

//checking variable type
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends)); // only array type have to checkWith isArray.
console.log(typeof add);


//some more function about array.

console.log(friends.includes(19));
console.log(friends.includes(21));


if (friends.indexOf(252) !== -1) {
    console.log(252, "is in the array");
}

//concat //

const newFriendsAge = [12, 13, 11, 13]
const allFriendsAge = newFriendsAge.concat(friends)
console.log(allFriendsAge);