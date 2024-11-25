let arrayOfNames = ["Prince", "Ahmed", "Habeeb", "Joan"];
let arrayOfNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sportsHouses = ["Red House", "Blue House", "Green House", "Yellow House"];

// Create Letter Variables
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-|?";
// .................

// 1
const filterEvenArray = (array) => {
  const evenNumArray = array.filter((numbers) => {
    return numbers % 2 === 0;
  });

  return evenNumArray;
};

console.log("1: ", filterEvenArray(arrayOfNumbs));

// 2
const containsElement = (array, element) => {
  const checkArr = array.includes(element);

  if (checkArr) {
    return `${element} is included in the array`;
  } else {
    return `${element} is NOT included in the array`;
  }
};

console.log("2: ", containsElement(arrayOfNames, "Prince"));

// 3
const reverseArray = (array) => {
  const reversed = array.reverse();

  return reversed;
};

console.log("3: ", reverseArray(arrayOfNames));

// 4
const filterEven = (numb) => {
  let divider = 2;

  if (numb % divider === 0) {
    return ` ${numb} is even number`;
  } else {
    return `${numb} is odd number`;
  }
};

console.log("4: ", filterEven(5));

// 5
const filterOddArray = (array) => {
  const evenNumArray = array.filter((numbers) => {
    return numbers % 2 !== 0;
  });

  return evenNumArray;
};

console.log("5: ", filterOddArray(arrayOfNumbs));

// 6
const isPalindrome = (word) => {
  const checkPalindrome = word.split("").reverse().join("");

  if (word === checkPalindrome) {
    return `Correct! ${word} is a Palindrome word`;
  } else {
    return `Incorrect!, ${word} is NOT a Palindrome word`;
  }
};

console.log("6: ", isPalindrome("rotor"));

// 7
const loginUser = (username, password) => {
  const user = username.slice(0, username.indexOf("@"));
  const userProperCase = user.charAt(0).toUpperCase() + user.slice(1);

  if (username === username) {
    if (password === password) {
      if (username && password) {
        return `Login Successful, Welcome back ${userProperCase}`;
      } else {
        return "No Username and Password";
      }
    } else {
      return "Incorrect Username";
    }
  } else {
    return "Incorrect Username";
  }
};

console.log(loginUser("prince@gmail.com", "Hello12345"));

// 8
const generatePassword = (lengthh) => {
  const allCharacters = lowercaseLetters + uppercaseLetters + numbers + symbols;

  const getRandom = Array.from({ length: lengthh }, () => {
    return allCharacters[Math.floor(Math.random() * allCharacters.length)];
  });

  const result = getRandom.join("");

  return result;
};
console.log("8: ", "Password Generated... ", generatePassword(10));

// 9
const assignHouse = (name) => {
  assign = sportsHouses[Math.floor(Math.random() * sportsHouses.length)];

  if (name) {
    return `Student with the name of ${name} is assigned to ${assign}`;
  } else {
    return `No student Name found`;
  }
};

console.log("9: ", assignHouse("Prince"));

// 10
const generateEmployeeDetails = (name, company) => {
  const at = "@";
  const domain = ".com";
  const roles = [
    "Manager",
    "Developer",
    "Human Resource",
    "Personnel",
    "Secetary",
    "Supervisor",
  ];

  // get Name
  const properName =
    name.charAt(0).toUpperCase() + name.slice(1, name.indexOf(" "));

  // get Email
  const nameTrim = name.trim().replaceAll(" ", "");
  const companyTrim = company.trim().replaceAll(" ", "");
  const joincompanyEmail = nameTrim + at + companyTrim + domain;
  const companyEmail = joincompanyEmail.toLowerCase();
  // get ID
  const uniqueID = Math.floor(Math.random() * 10000);
  // get Role
  const randomRoles = roles[Math.floor(Math.random() * roles.length)];

  return {
    message: "Welcome to our Platform",
    data: {
      id: uniqueID,
      name: properName,
      email: companyEmail,
      role: randomRoles,
    },
  };
};

console.log(
  "10: ",
  generateEmployeeDetails("Prince John", "Dwayne Consolidated Ltd")
);
