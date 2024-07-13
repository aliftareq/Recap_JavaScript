/*
fixed: per item wood requirements
1.chair --> 3cft;
2.table --> 10cft;
3. bed --> 50cft; 
*/

function woodCalculator(c, t, b) {
    var totalNeedOfWood = (c * 3) + (t * 10) + (b * 50);
    return totalNeedOfWood;
}

var result = woodCalculator(2, 1, 1)
console.log('Your requirement wood amount is: ', result, 'cft');