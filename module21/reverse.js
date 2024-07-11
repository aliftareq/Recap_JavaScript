// making string or word  or array reverse


//reverse text
function reverseString(text) {
    let reverseText = '';
    for (i = text.length - 1; i >= 0; i--) {
        const element = text[i]
        reverseText = reverseText + element;
    }
    return reverseText
}

var result1 = reverseString('Alif');
// console.log(result1);


//reverse a word

function reverseWord(text) {
    var actualText = text.split(" ")
    var reverseText = ""
    for (i = actualText.length - 1; i >= 0; i--) {
        reverseText = reverseText + " " + actualText[i];
    }
    return reverseText;
}

var result2 = reverseWord("I am a good boy")
console.log(result2);