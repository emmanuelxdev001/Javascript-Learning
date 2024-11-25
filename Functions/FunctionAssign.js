let arrayOfNames = ["Prince", "Ahmed", "Habeeb", "Joan"];

let arrayOfNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sportsHouses = ["Red House", "Blue House", "Green House", "Yellow House"];

// Create Letter Variables
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-|?";
// .................

// 8

const passwordGenerator = (lengthh) => {
  const allCharacters = lowercaseLetters + uppercaseLetters + numbers + symbols;

  const randomPassLength = Array.from({ length: lengthh }, () => {
    return allCharacters[Math.floor(Math.random() * allCharacters.length)];
  });

  const result = randomPassLength.join("");

  return result;
};

console.log();
console.log();
console.log("8: ", passwordGenerator(4));
console.log();
console.log();
console.log();

// 1
const filterEven = (array) => {
  const evenNumbers = array.filter((el) => {
    return el % 2 === 0;
  });

  return evenNumbers;
};

console.log("1: ", filterEven(arrayOfNumbs));

// 2
const containsElement = (array, element) => {
  const checkEl = array.includes(element);
  if (checkEl === true) {
    return `Yes ${element} is in the array`;
  } else {
    return `No ${element} is not in the array`;
  }
};

console.log("2: ", containsElement(sportsHouses, "Red House"));

// 3
const reverseArray = (array) => {
  const revarr = array.reverse();

  return revarr;
};

console.log("3: ", reverseArray(arrayOfNames));

// 4
const isEven = (num) => {
  let myNum = num;

  if (myNum % 2 === 0) {
    return `${myNum} is an even number`;
  } else {
    return `${myNum} is an odd number`;
  }
};

console.log("4: ", isEven(6));
console.clear();

let arrofID = [12345, 5674, 8292, 3284, 1922, 4382, 2230, 7344, 4393];

const splicedOut = arrofID.splice(arrofID.indexOf(12345), 1);
console.log(arrofID);
