//syntactic suger
class Instructor {
    name;
    designation = 'Web Course Instructor';
    team = 'Web team';
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`Start the support Session at ${time}`);
    }
    createQuiz(module) {
        console.log(`create Quiz for for module ${module}`);
    }
}


const aamir = new Instructor('aamir', 'mumbai')
console.log(aamir);
// aamir.startSupportSession('9:00')
// aamir.createQuiz(60)

const solaiman = new Instructor('Solaiman khan', 'dhaka')
// console.log(solaiman);