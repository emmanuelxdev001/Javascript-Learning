// An Interger is a whole number
// Javascript Regards both Intergers, Decimals and Floats as Numbers

let myNum = 42;
let decimalNum = 42.0;
let decimalNum2 = 42.01;
let myStringNum = "42";
let myStringNum2 = "5";

console.clear();

// Checking for stringValue

console.log("12" / 2);

console.log("Two String with Values Number ", myStringNum - myStringNum2);

console.log("String value check... ", myStringNum + 3);
console.log("Number value check... ", 10 + 10);

if (myStringNum + 3 === 45) {
  console.log("This strictly equals 45");
} else {
  console.log("This strictly equals 423 and it concats the string");
}

// Checking datatype
console.log(typeof myNum);
console.log(typeof decimalNum);
console.log(typeof myStringNum);

if (myNum === decimalNum) {
  console.log(`${myNum} is strictly equals ${decimalNum}`);
} else {
  console.log(`${myNum} not equals ${decimalNum}`);
}
// Second Operation
if (myNum === decimalNum2) {
  console.log(`${myNum} is strictly equals ${decimalNum2}`);
} else {
  console.log(`${myNum} not equals ${decimalNum2}`);
}

console.clear();
// Boolean
let truth = true;
let falsey = false;

console.log("Number Value for true", Number(truth));
console.log("Number Value for false", Number(falsey));

"1" === 1 ? console.log("Yes its true") : console.log("No its not true");

// Primitive Datatypes Objects
String, Number;
Array;
Boolean;

console.clear();

// NAN

let groom = "12";
let groom1 = "hello";
let groom2 = 12345;

// The number is NaN () function checks weather the value and datatype is Number
console.log("Number is Not a Number", Number.isNaN(groom1));
console.log("Number is Not a Number", Number.isNaN(groom2));

// The Global is NaN () function checks weather the value is NaN or not
console.log();

console.log("Global is NaN", isNaN(groom));
console.log("Global is NaN", isNaN(groom1));
console.log("Global is NaN", isNaN(groom2));
