// PLAIN STRING METHODS

// 1. length
const paragraph = "I am a boy learning Javascript";
console.log("checking length= ", paragraph.length);

// 2. toLowerCase
const personalEmail = "PRINCEJOHN@MAIL.COM";
console.log("checking toLowerCase= ", personalEmail.toLowerCase());

// 3. toUpperCase
const companyEmail = "princejohn@codelaborganization.com";
console.log("checking toUpperCase= \n", companyEmail.toUpperCase());

// 4. trim, trimEnd, trimStart
const text = " Hello and you are welcome to codelab today ";
console.log("checking trim = ", text.trim());
console.log("checking trimEnd = ", text.trimEnd());
console.log("checking trimStart = ", text.trimStart());

// 5. valueOf
const textII = "Lets work and achieve great things";
console.log("checking valueOF = ", textII.valueOf());

// ARGUMENT STRING METHODS

// 6. charAT and charCodeAt
const aboutJS =
  "Javascript is a programming language used to build interactive web applications";
console.log("checking charAt = ", aboutJS.charAt(14));
console.log("checking charCodeAt = ", aboutJS.charCodeAt(14));

// 7. concat
const aboutJSII = " It also is the engine of your web application";
const firstName = "KENNY";
const lastName = "GIFT";
const at = "@";
const company = "COdelabOrganization";
const domain = ".com";

console.log(
  "checking concat = ",
  firstName
    .concat(lastName)
    .concat(at)
    .concat(company)
    .concat(domain)
    .toLowerCase()
);
console.log("\n");
console.log("checking concat = ", aboutJS.concat(aboutJSII));

// 8. split
const valuedGuests =
  "Daniel and Chioma are esteemed guests for the charity event";
const todaysDate = "20-07-2024";
console.log("checking split = ", valuedGuests.split("i"));

// 9. slice
const eventTime = "The charity events starts at 11:00am prompt";
console.log("checking slice = ", eventTime.slice(0, 11));
console.log("checking slice = ", eventTime.slice(29, 36));
console.log("checking slice = ", eventTime.slice(36, 43));

// 10. startsWith, and endsWith
const agenda = "The charity event is to raise money for rural communities";
console.log("checking startsWith = ", agenda.startsWith("The"));
console.log("checking endsWith = ", agenda.endsWith("communities"));

// 11. replace, and replaceAll
const simpleEssay =
  "He was held at gun point at the bus-stop. Thank God the police interverned and he was safe. He is now at Home";
console.log("checking replace = ", simpleEssay.replace("He", "2pac"));
console.log("\n");
console.log("checking replaceAll = ", simpleEssay.replaceAll("He", "2pac"));

console.clear();

// 12. repeat
const essayII = "She was held at gun point";
console.log("checking repeat = ", essayII.repeat(10));

// 13. indexOf and lastindexOF
const welcome =
  "Welcome to NEXT Technology Company, How can we be of service Welcome?";
console.log("checking indexOF = ", welcome.indexOf("Welcome"));
console.log("checking indexOF = ", welcome.indexOf("How"));
console.log("checking indexOF = ", welcome.length);
console.log("checking lastIndexOF = ", welcome.lastIndexOf("Welcome"));

// 14. includes
const finale = "This is where we will end our Javascript class today";
console.log("checking includes = ", finale.includes("hello"));

// To get Name initials

const $name = "Mama Yekini Ayoba";

const final = $name.charAt(0) + $name.charAt($name.indexOf(" ") + 1);

console.log("1. ", final);
