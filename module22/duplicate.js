//removing duplication 

let names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];


//my soln
function removeDuplicates(names) {
    let uniqueNames = []
    for (i = 0; i < names.length; i++) {
        if (!uniqueNames.includes(names[i])) {
            uniqueNames.push(names[i])
        }
    }
    return uniqueNames;
}


var nameWithoutDuplication = removeDuplicates(names)
console.log(nameWithoutDuplication);

//jhankar_bhai_soln

// function removeDuplicates2(names) {
//     let uniqueNames2 = []
//     for (i = 0; i < names.length; i++) {
//         let name = names[i]
//         if (uniqueNames2.includes(name) === false) {
//             uniqueNames2.push(names[i])
//         }
//     }
//     return uniqueNames2;
// }


// var nameWithoutDuplication2 = removeDuplicates2(names)
// console.log(nameWithoutDuplication2);