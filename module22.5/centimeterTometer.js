function ConvertCMtoMeter(meter, cm) {
    const valueInMeter = (cm / 100) + meter;
    return valueInMeter;
}

const result = ConvertCMtoMeter(2, 5)
console.log("the answer is is:", result);