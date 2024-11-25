class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    return `Hello, my name is ${this.name}, and I am ${this.age} years old.`;
  }
}

// Creating an instance of the class
const person1 = new Person("John", 25);
console.log(person1.greet());

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class constructor
    this.jobTitle = jobTitle;
  }

  describeJob() {
    return `I am a ${this.jobTitle}.`;
  }
}

const employee1 = new Employee("Alice", 30, "Developer");
console.log(employee1.greet()); // Hello, my name is Alice, and I am 30 years old.
console.log(employee1.describeJob()); // I am a Developer.
