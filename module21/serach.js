const lyrics = 'Tumi bondhu kala pakhi , ami jeno ki? bosonto kale tomay bolte pari ni. sada sada kala kala!'

const searchString = 'paKhi';
// var doesExist = lyrics.includes('pakhi')
// var doesExist = lyrics.includes('Pakhi')
// var doesExist = lyrics.includes(searchString)
var lyricsLowerCase = lyrics.toLowerCase()
var searchStringLowerCase = searchString.toLowerCase()
var doesExist = lyricsLowerCase.includes(searchStringLowerCase)
// console.log(doesExist);


var doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase())
// console.log(doesExistOneLine);

//-------------------------------

//index of

console.log(lyrics.indexOf('kala')); //return the first one
console.log(lyrics.indexOf('kailla')); // will return -1;

//
if (lyrics.indexOf('sadda') !== -1) {
    console.log('Exist inside the String');
}
else {
    console.log('cant find it');
}


//startsWith

console.log(lyrics.startsWith('Tumi'));
console.log(lyrics.startsWith('2mi'));

//endsWith
const fileName = 'myBiodata.pdf'
const otherFile = 'mypic.jpg'

if (fileName.endsWith('pdf')) {
    console.log('its a pdf file');
}
else {
    console.log('its not a pdf file');
}