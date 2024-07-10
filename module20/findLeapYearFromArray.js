function findLeapYearFromArrary(array) {
    for (i = 0; i < array.length; i++) {
        if ((array[i] % 400 == 0) || (array[i] % 4 == 0 && array[i] % 100 != 0)) {
            console.log(array[i], 'is leap year');
        }
        else {
            console.log(array[i], "is not leap year");
        }
    }
}

findLeapYearFromArrary([2023, 2024, 2025, 2028, 2030])