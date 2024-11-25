class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(5, 3)); // 8

class Person {
  constructor(name, age) {
    this._name = name; // Using _ to indicate private property
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const person = new Person("Eve", 28);
console.log(person.name); // Eve
person.name = "Anna";
console.log(person.name); // Anna

class BankAccount {
  #balance = 0; // Private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance);
