// CODE here for your Lambda Classes
// 

class Person {
    constructor(attr){
        this.name = attr.name;
        this.age = attr.age; 
        this.location = attr.location;
        this.gender = attr.gender; 

    }
   speak() {
    return `Hello, my name is Fred ${this.name} I am from  ${this.location}`
   } 
}

class Instructor extends Person {
    constructor(teach){
    super(teach)
    this.specialty = teach.specialty;
    this.favLanguage = teach.favLanguage;
    this.catchPhrase = teach.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return ` ${student} recieves a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(learn){
        super(learn)
        this.previousBackground = learn.previousBackground;
        this.className = learn.className;
        this.favSubjects = learn.favSubjects; 
    }  
    listSubjects(){
        return this.favSubjects;
    }
    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${student.name} has begun work on the spring challenge for ${subject}`
    }
}

class Projectmanager extends Instructor {
    constructor(pm){
        super(atpmtr)
        this.gradClassname = pm.gradClassname;
        this.favInstructor = pm.favInstructor;    
    }
    standup(slack){
    return `${this.name} announces to ${slack}`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name} code on ${subject} `
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


  console.log(fred);