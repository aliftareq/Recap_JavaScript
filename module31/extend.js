class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    };
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback!`);
    }
}

class Instructor extends TeamMember {
    designation = 'Web Course Instructor';
    team = 'Web team';
    constructor(name, location) {
        super(name, location)
    }
    startSupportSession(time) {
        console.log(`Start the support Session at ${time}`);
    }
    createQuiz(module) {
        console.log(`create Quiz for for module ${module}`);
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback!`);
    }
}

class Developer extends TeamMember {
    designation = 'Frontend Developer';
    team = 'Web team';
    constructor(name, location, tech) {
        super(name, location)
        this.tech = tech
    }
    developFeature(feature) {
        console.log(`Please develop this feature ${feature}`);
    }
    release(version) {
        console.log(`Please develop this feature ${version}`);
    }
}

class JobPlacement extends TeamMember {
    designation = 'Job placement commandos';
    team = 'Job placement';
    constructor(name, location, region) {
        super(name, location)
        this.region = region
    }
    provideResume(time) {
        console.log(`Start the support Session at ${time}`);
    }
    prepareStudent(module) {
        console.log(`create Quiz for for module ${module}`);
    }
}


const alia = new Developer('Alia bhatt', 'Dhaka', 'React')
console.log(alia);
alia.provideFeedback()

const bipasha = new JobPlacement('bipasha', 'kolkata', 'India')


//prototypical inheritance

