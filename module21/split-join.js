const lyrics = 'Tumi bondhu kala pakhi , ami jeno ki. bosonto kale tomay bolte pari ni. sada sada kala kala.'

const words = lyrics.split(' ')
const sentence = lyrics.split(".")
const chars = lyrics.split("")

// console.log(words);
// console.log(sentence);
// console.log(chars);


//slice operation

const partial1 = lyrics.slice(5, 8)
// console.log(partial1);

const partial2 = lyrics.substring(5, 8)
// console.log(partial2);


//---------join operation---------

const lines = [
    'Tumi bondhu kala pakhi , ami jeno ki',
    'Bosonto kale tomay bolte pari ni',
    'Sada sada kala kala',
]

const newSong = lines.join(". ")
console.log(newSong);