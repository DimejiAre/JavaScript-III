/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If 'this' is defined in the global scope or in a function in the global scope, the 'this' keyword has a value of the window object.
* 2. If the 'this' keyword is defined in an object, it is implicitly bound to that object.
* 3. If used in a constructor function, 'this' is bound to the newly created object returned by the constructor.
* 4. 'this' can be explicitly defined using the call, apply and bind methods of a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greet(){
    console.log(this);
    return `Hi!`;
}

console.log(greet())

// Principle 2

// code example for Implicit Binding

let Instructor = {
    name: "Gabe",
    age: 42,
    speak: function (){
        console.log(this);
        return `Hello! my name is ${this.name}, and i am ${this.age} years old`;
    },
}

console.log(Instructor.speak());

// Principle 3

// code example for New Binding

function Student(name, school){
    this.name = name;
    this.school = school;
    this.details = function(){
        console.log(this);
        return `A student named ${this.name} goes to ${this.school}`;
    };
}

let myStudent = new Student("Dimeji", "Lambda School");

console.log(myStudent.details());

// Principle 4

// code example for Explicit Binding

function pet (name){
    console.log(this);
    return `my pet's name is ${name}`;
}

console.log(pet.call({fruit:"orange"},'scooby'));