var name = "alif";
var age = 24;
var isGraduate = false;


//9
const ages = [12, 13, 14, 15, 16, 17]

// for (i = 0; i < ages.length; i++) {
//     console.log(ages[i]);
// }

for (const number in ages) {
    //console.log(number); //return indexes
}

for (const number in ages) {
    //console.log(ages[number]); //return element of array
}

for (const number of ages) {
    //console.log(number); //return element of array
}