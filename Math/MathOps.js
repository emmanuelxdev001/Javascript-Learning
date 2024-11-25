const myNumber = 10;
const myDecimalNumber = 15.253;
const myStringNumber = "454.00abcd";
const myStringNumber2 = "454.3422abcd";

// Math. Interger

console.log(" is integer", Number.isInteger(myNumber));
console.log("number is integer ", Number.isInteger(myDecimalNumber));
console.log(Number.isInteger(myStringNumber));

// Parsefloat
const checkparseFloat = Number.parseFloat(myNumber);
const checkparseFloat2 = Number.parseFloat(myDecimalNumber);
const checkparseFloat3 = Number.parseFloat(myStringNumber2);
console.log("ParseFloat", checkparseFloat);
console.log("ParseFloat", checkparseFloat2);
console.log("ParseFloat", checkparseFloat3);

// ParseInt
const parseInt1 = parseInt(myStringNumber);
const parseInt2 = parseInt(myStringNumber2);
const parseInt3 = parseInt(myDecimalNumber);

console.log("ParseInt", parseInt1);
console.log("ParseInt", parseInt2);
console.log("ParseInt", parseInt3);

// console.clear();

// ToFixed
console.log(myNumber.toFixed(2));
console.log(myDecimalNumber.toFixed(2));

// ToString

console.log(myNumber.toString());
console.log(myDecimalNumber.toString());

// Number Chaining

console.log(parseInt(myStringNumber).toFixed(2));
