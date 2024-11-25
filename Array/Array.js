let nameOfArray = [];

//  Orderded List of Shopping items
//  1. bag
//  2. fruits
//  3. chicken
//  4. youghurt

const arryOfStrings = [
  "Mijay",
  "Isreal",
  "Kcee",
  "Kenny",
  "Gift",
  "Sixtus",
  "Praise",
];

const arrOfNumber = [6, 5, 700, 25, 10, 30, 56, 22, 100];

const arrOfBoolean = [true, false];
const arrOfundefiend = [undefined];

const matrixArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
];

console.log(matrixArray[0][2]);
// console.log(arrOfundefiend);
// console.log(arryOfStrings[0]);
// console.log(arryOfStrings[1]);
// console.log(arryOfStrings[6]);
// console.clear();
// console.log(arrOfNumber[5]);
// console.log(arrOfBoolean[0]);

console.clear();

const newArray = [
  [
    1,
    2,
    3,
    ["Hello", "Hi"],
    4,
    5,
    {
      name: "prince",
      school: {
        class: "Set10",
        subjects: [
          "Javascript",
          "Html",
          "css",
          { projectName: "Website to build" },
        ],
      },
    },
  ],
  [17, 19, 22, 26, 28],
];
console.log(newArray[0][6].school.subjects[3].projectName);
console.log(newArray[1][4]);
