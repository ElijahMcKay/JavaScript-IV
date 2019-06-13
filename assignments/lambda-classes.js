// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name; 
        this.age = attributes.age;
        this.location = attributes.location; 
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;  
    }
}

class Instructor extends Person {
    constructor(attributes) {
        super(attributes); 
        this.specialty = attributes.specialty; 
        this.favLanguage = attributes.favLanguage; 
        this.catchPhrase = attributes.catchPhrase; 
    }
    demo(subject) {
        return `Today we are learning about ${subject}`; 
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes); 
        this.previousBackground = attributes.previousBackground; 
        this.className = attributes.className; 
        this.favSubjects = attributes.favSubjects; 
    }
    listsSubjects(array) {
        for(let i = 0; i < array.length; i++) { //I know this wasn't needed, but the instruction say to print them one at a time, hence the for loop
            return array[i]; 
        }
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes); 
        this.gradClassName = attributes.gradClassName; 
        this.favInstructor = attributes.favInstructor; 
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`; 
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`; 
    }
}

const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

  const isaiah = new Student({
    name: 'Isaiah',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
    const kevin = new Student({
    name: "Kevin",
    age: 28,
    location: "California",
    previousBackground: "Table Games Dealer",
    className: "WEB21",
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
    const nisa = new Student({
    name: 'Nisa',
    age: 25,
    location: 'Ohio',
    previousBackground: 'Debt Collector',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});

    const joscelyn = new Student({
    name: "Joscelyn",
    age: 29,
    location: "California",
    previousBackground: "English teacher",
    className: 'Web21',
    favSubjects: ["Computer Science", "Philosophy", "English"],
});

  const marguel = new ProjectManager({
    name: 'Marguel',
    age: 'Maybe 26',
    gradClassName: 'WEBPT2',
    favInstructor: 'Me?',
    location: 'California',
    specialty: 'React',
    favLanguage: 'JavaScript, Python, Elm etc.',
    catchPhrase: "Practice Flex Zombies !!!",
});

  const brandon = new ProjectManager({
    name: 'Brandon',
    age: '34',
    gradClassName: 'WEB18',
    favInstructor: 'Professor Lambda',
    location: 'Maine',
    specialty: 'Redux',
    favLanguage: 'JavaScript, C++, Python.',
    catchPhrase: "You shall not pass!",
});

    const mary = new ProjectManager({
    name: 'Mary',
    age: '24',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'New York',
    specialty: 'Express and Node.js',
    favLanguage: 'Javascript',
    catchPhrase: "That looks AWESOME",
});

    const christian = new ProjectManager({
    name: 'Christian',
    age: '32',
    gradClassName: 'WEB18',
    favInstructor: 'Every Instructor in Lambda',
    location: 'Seattle, WA',
    specialty: 'Data Structures & Algorithms',
    favLanguage: 'JavaScript',
    catchPhrase: "Dont forget your daily commit.",
});

    const pat = new ProjectManager({
    name: 'Pat',
    age: '38',
    gradClassName: 'WEB18',
    favInstructor: 'Brett Madrid',
    location: 'Petaluma, Ca',
    specialty: 'Empathetic to the struggle of Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Lets google that together.'
});

    const darren = new ProjectManager({
    name: 'Darren',
    age: '25',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'North Carolina',
    specialty: 'React',
    favLanguage: 'Javascript',
    catchPhrase: 'Gang. Gang.',
});
    const austin = new ProjectManager({
    name: 'Austin',
    age: '23',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'Somewhere',
    specialty: 'Java',
    favLanguage: 'Java',
    catchPhrase: ":eggplant:",
});


// ================ Testing =================



// ==== Instructor Testing ====

console.log(dan.name);
console.log(dan.age);
console.log(dan.location);
console.log(dan.specialty);
console.log(dan.favLanguage);
console.log(dan.catchPhrase);
console.log(dan.demo('Javascript')); 
console.log(dan.grade(nisa, 'LESS')); 

// ==== Project Manager Testing ====

console.log(austin.name);
console.log(austin.age);
console.log(austin.gradClassName);
console.log(austin.favInstructor);
console.log(austin.location);
console.log(austin.specialty);
console.log(austin.favLanguage);
console.log(austin.catchPhrase);
console.log(austin.standUp('WEB21_pairprogramming'));
console.log(austin.debugsCode(nisa, 'Javascript'));


console.log(darren.name);
console.log(darren.age);
console.log(darren.gradClassName);
console.log(darren.favInstructor);
console.log(darren.location);
console.log(darren.specialty);
console.log(darren.favLanguage);
console.log(darren.catchPhrase);
console.log(darren.standUp('WEB21'));
console.log(darren.debugsCode(joscelyn, 'HTML'));

// ==== Student Testing ====

console.log(isaiah.name);
console.log(isaiah.age);
console.log(isaiah.location);
console.log(isaiah.previousBackground);
console.log(isaiah.className);
console.log(isaiah.favSubjects);
console.log(isaiah.listsSubjects(isaiah.favSubjects));
console.log(isaiah.PRAssignment('Advanced CSS'));
console.log(isaiah.sprintChallenge('Inheritance'));


console.log(kevin.name);
console.log(kevin.age);
console.log(kevin.location);
console.log(kevin.previousBackground);
console.log(kevin.className);
console.log(kevin.favSubjects);
console.log(kevin.listsSubjects(kevin.favSubjects)); 
console.log(kevin.PRAssignment('Closures'));
console.log(kevin.sprintChallenge('Prototyping'));



//


 