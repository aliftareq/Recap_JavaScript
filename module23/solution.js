//------------------Problem No.1 started-------------------------

// Solution for problem-1

function radianToDegree(radian) {

    // cheking the input is valid or not

    if (typeof radian !== 'number') {

        return "Your Input is invalid, please try again, with a number."

    }

    else {

        //converting the input value--> into radian with the help of formula.

        let degreeValue = radian * (180 / Math.PI);

        degreeValue = parseFloat(degreeValue.toFixed(2));

        return degreeValue;

    }

}

//------------------Problem No.1 Ended--------------------------

//------------------Problem No.2 started------------------------

// Solution for problem-2

function isJavaScriptFile(fileName) {

    // cheking the input is valid or not

    if (typeof fileName !== 'string') {

        return "Your Input is invalid. please try again, with a string."

    }

    else {

        // js files extension is .js thats why, checking the file is endswith .js or not

        let result = fileName.endsWith('.js');

        return result;

    }

}

//------------------Problem No.2 Ended--------------------------

//------------------Problem No.3 started-------------------------

// Solution for problem-3

function oilPrice(DisealQuantity, PetrolQuantity, OctaneQuantity) {

    // cheking the input is valid or not

    if (typeof DisealQuantity !== 'number' || typeof PetrolQuantity !== 'number' || typeof OctaneQuantity !== 'number') {

        return "Your Input is invalid. please try again, with valid numbers."

    }

    else {

        // declaring the prices(per liter) with variables.

        const perLiterDiseal = 114;

        const perLiterPetrol = 130;

        const perLiterOctane = 135;

        // calculating the individual cost of oils.

        let costOfDiseal = DisealQuantity * perLiterDiseal;

        let costOfPetrol = PetrolQuantity * perLiterPetrol;

        let costOfOctane = OctaneQuantity * perLiterOctane;

        // calculating the total cost of oils by summing all the individual cost.

        let totalCost = costOfDiseal + costOfPetrol + costOfOctane;

        return totalCost;

    }

}

//------------------Problem No.3 Ended--------------------------

//------------------Problem No.4 started-------------------------

// Solution for problem-4

function publicBusFare(numberOfTourist) {

    // cheking the input is valid or not

    if (typeof numberOfTourist !== 'number') {

        return "Your Input is invalid. please try again, with a number."

    }

    else {

        // determing the remaining people (with help of 'remainder' concept).

        let restPeopleAfterBus = numberOfTourist % 50;

        let restPeopleAfterMicro = restPeopleAfterBus % 11;

        let restPeopleForPublicBus = restPeopleAfterMicro;

        // determining the total bus-fare by multiplying 250tk for the rest of the people.

        let busFare = restPeopleForPublicBus * 250;

        return busFare;

    }

}

//------------------Problem No.4 Ended--------------------------

//------------------Problem No.5 started-------------------------

// Solution for problem-5

function isBestFriend(obj1, obj2) {

    //storing the object parameters in variables.

    let object1 = obj1;

    let object2 = obj2;

    // cheking the input is valid or not

    if (typeof object1 !== 'object' || typeof object2 !== 'object') {

        return 'Your input is invalid. Please, try again with object variables.'

    }

    //checking the value of the properies valid or not.

    else if (typeof object1.name !== 'string' || typeof object1.friend !== 'string' || typeof object2.name !== 'string' || typeof object2.friend !== 'string') {

        return "Your object property value is invalid. Please, try again with proper property value."

    }

    // cross checking the property value of objects are equall or not.

    // if both property match it will return true, else it will return false..

    else {

        if (object1.name === object2.friend && object2.name === object1.friend) {

            return true

        }

        else {

            return false

        }

    }

}

//------------------Problem No.5 Ended--------------------------