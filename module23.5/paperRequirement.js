function paperRequirements(firstBook, secondBook, thirdBook) {
    const totalRequiredPaper = (firstBook * 100) + (secondBook * 200) + (thirdBook * 300)
    return totalRequiredPaper;
}

const result1 = paperRequirements(1, 2, 3)
console.log('Totol required paper is:', result1);

const result2 = paperRequirements(2, 5, 1)
console.log('Totol required paper is:', result2);