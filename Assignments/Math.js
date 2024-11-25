// Numbers
let userScore = 12.345;
let totalAmount = 78.9;
let discountRate = 0.123;

// Strings
let priceTag = "Value: 45.67";
let fruitInventory = "Amount: 123 apples";

// 1
console.log(checkIfInteger(userScore));
console.log(checkIfInteger(totalAmount));
console.log(checkIfInteger(discountRate));

// 2
let formattedScore = userScore.toFixed(2);
console.log(formattedScore); // "1

// 3
let totalAmountString = totalAmount.toString();
console.log(totalAmountString);

// 4
let priceValue = parseFloat(priceTag.split(": ")[1]);
console.log(priceValue);

// 5
let appleCount = parseInt(fruitInventory.split(" ")[1]);
console.log(appleCount);
