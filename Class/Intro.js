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
console.log(person1.greet()); // Hello, my name is John, and I am 25 years old.
