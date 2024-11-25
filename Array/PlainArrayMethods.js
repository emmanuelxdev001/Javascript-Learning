const foodStuffs = [
  "Rice",
  "Beans",
  "Yam",
  "Garri",
  "Poundo",
  "Plaintain",
  "Semo",
  "Salad",
  "Seafood",
  "Indomie",
  "Beef",
  "Turkey",
  ["Potato", "Chicken"],
];

const ingriedients = ["Curry", "Thyme", "Maggi"];

const brandNewCar = [
  {
    make: "Mercedes Benz",
    model: "C-Class",
    year: 2020,
    features: [
      "Air Conditioning",
      "Power Steering",
      "Cruise Control",
      "Adaptive Braking",
      "Ambience Lighting",
    ],
    ownerNames: ["John", "Doe"],
    carMph: ["30mph", "40mph", "60mph", "80mph", "100mph"],
  },
];

const numbers = [3, 5, 1, 2, 4];
const numbers2 = [19, 2, 2, 4, 16, 25, 25];

// 15. CopyWithin
// const copyWithinn = foodStuffs.copyWithin(0, 0, 4);
// console.log("Checking Copy Within", copyWithinn);
// console.log("Checking Copy Within", foodStuffs);

// 14. Fill
// const checkingFill = foodStuffs.fill("hii", 0, 4);
// const checkingFill2 = brandNewCar[0].ownerNames.fill("Kenny", 0, 2);
// console.log("Reverse", checkingFill2);
// console.log("Foodstuffs", foodStuffs);

// 13. Reverse
// const checkingReverse = foodStuffs.reverse();
// const checkingReverse2 = brandNewCar[0].carMph.reverse();
// console.log("Reverse", checkingReverse2);

// 12. ToString
// const checkingTostring = foodStuffs.toString();
// const checkingTostring2 = brandNewCar[0].features.toString();
// console.log("Tostring", checkingTostring2);

// const checkingSort = foodStuffs.sort();
// console.log("Checking Sort", checkingSort);
// console.log("Checking Foodstuffs", foodStuffs);

// 11. Sort
// const numberSort = numbers2.sort();
// const numberSortCompare = numbers2.sort(
//   (smallNumber, bigNumber) => smallNumber - bigNumber
// );
// const numberSortCompare2 = numbers2.sort(
//   (smallNumber, bigNumber) => bigNumber - smallNumber
// );
// console.log("Number sort", numberSortCompare);

// 10. IndexOf
// const checkingIndexOf = foodStuffs.indexOf("garri");
// console.log("Checking IndexOf", checkingIndexOf);
// console.log("Checking Foodstuffs", foodStuffs);

// 9. LastIndexOf
// const checkingLastIndexOf =
//   brandNewCar[0].features.lastIndexOf("Ambience Lighting");
// console.log("Checking IndexOf", checkingLastIndexOf);
// console.log("Checking Foodstuffs", brandNewCar);

// const checkingSplice = foodStuffs.splice(2, 4, "Paw Paw");
// console.log("checking splice", checkingSplice);
// console.log("Foodstuffs", foodStuffs);

// 8. Splice
// const checkingSplice2 = brandNewCar[0].ownerNames.splice(0, 1, "Prince");
// console.log("checking splice nested", checkingSplice2);
// console.log("checking splice nested", brandNewCar);

// 7. Slice
// const checkingSlice = foodStuffs.slice(0, 5);
// console.log("checking slice", checkingSlice);
// console.log("foodStuffs", foodStuffs);
// const checkingSlice2 = brandNewCar[0].carMph.slice(0, 2);
// console.log(checkingSlice2);
// console.log(brandNewCar);

// 6. Join
const checkingJoin = foodStuffs.join("|");
console.log("Checking Join Return Type: ", checkingJoin);
__;
const checkingJoin2 = brandNewCar[0].features.join("/");
console.log("Checking Join Return Type: ", checkingJoin2);

// 5 Concat
// let checkingConcat = foodStuffs.concat(ingriedients);
// console.log("Checking concat Return Type: ", checkingConcat);

// const firstConcat = brandNewCar[0].ownerNames;
// const secondConcat = brandNewCar[0].carMph;
// console.log("Second Concat Method", firstConcat.concat(secondConcat));

// const thirdConcat = brandNewCar[0].features.concat(firstConcat, secondConcat);
// console.log(thirdConcat);

// 4 Unshift
// const checkingUnshift = foodStuffs.unshift("Cornflakes");
// console.log("Unshift Return Type: ", checkingUnshift);

// const checkingUnshift2 = brandNewCar[0].ownerNames.unshift("Emma", "Sixtus");
// console.log(checkingUnshift2);
// console.log(brandNewCar);

// 3 Shift
// const checkingShift = foodStuffs.shift();
// console.log("Shift Return Type: ", checkingShift);

// console.clear();
// const checkingShift2 = brandNewCar[0].features.shift();
// console.log(checkingShift2);
// console.log(brandNewCar);

// 2 Push
// const checkingPush = foodStuffs.push("cornflakes", "Oats");
// console.log(checkingPush);
// console.log(foodStuffs);
// console.clear();
// const checkingPush2 = brandNewCar[0].features.push("touchscreen", "Led lights");
// console.log("Push Return Type: ", checkingPush2);
// console.log("Push Update: ", brandNewCar);

// 1 Pop
// console.log("Foodstuffs ", foodStuffs);

// const checkingPop = foodStuffs[12].pop();

// console.log("Cheking Pop1", checkingPop);

// console.log("Checking Foodstuffs", foodStuffs);
// const checkingPopII = foodStuffs[12].pop();

// console.log(checkingPopII);

// console.log(foodStuffs.pop());

// console.log(foodStuffs);

// const checkingPop2 = brandNewCar[0].carMph.pop();
// console.log("Checking Second Pop Example= ", checkingPop2);
// console.log("Checking Second Pop Example= ", brandNewCar);
