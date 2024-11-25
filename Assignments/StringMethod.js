// 1
const sentence = "The quick brown fox jumps over the lazy dog";

const sliceBrown = sentence.slice(10, 15).toUpperCase();

const modifiedWord = sentence.replace("dog", sliceBrown);

const finalSentence = modifiedWord.replace("lazy", "");

console.log("1. ", finalSentence);

// 2
const email = "Student.Name@SchoolDomain.com";

const domain = email.slice(13, 29).toLowerCase();
const username = email.slice(0, 12).toUpperCase();
const at = email.charAt(12);
const newMail = username.concat(at).concat(domain);

console.log("2. ", newMail);
// 3
const messyString = " Too many spaces here. ";
const trimmed = messyString.trim();
const lengthTrim = trimmed.length;
const subStr = trimmed.substring(5, lengthTrim - 5);

console.log("3. ", subStr);
// 4
const phrase = "I like to code in JavaScript. JavaScript is fun!";
const firstOcc = phrase.replaceAll("JavaScript", "JS").toUpperCase();
const finalPhrase = firstOcc.substring(10, 30);

console.log("4. ", finalPhrase);
// 5
const text = "Programming is highly rewarding";
const _chartenth = text.charAt(10);
const uniCodeG = _chartenth.charCodeAt();
const extract = text.replaceAll("g", uniCodeG);
const finalSlice = extract.slice(8, 29);

console.log("5. ", finalSlice);

// 6
const firstName = "Jane";
const middleName = "Marie";
const lastName = "Smith";

const concatStrings = firstName
  .concat(" ")
  .concat(middleName)
  .concat(" ")
  .concat(lastName)
  .toUpperCase();
const newIndex = concatStrings.indexOf("M");
const replacedName = concatStrings.replace("MARIE", "Ann");

console.log("6. ", replacedName);

// 7
const statement = "JavaScript is a versatile and popular programming language";

const checkStart = statement.startsWith("JavaScript");
const checkEnd = statement.endsWith("language");
const statementReplace = statement
  .replace("versatile", "powerful")
  .toLowerCase();

console.log("7. ", statementReplace);

// 8
const description =
  "Backend development involves working with databases, servers, and APIs";

const extractSubStr = description.substring(42, 70).toLowerCase();

const slitArr = extractSubStr.split(",");
const finalJoin = slitArr.join("&");

console.log("8. ", finalJoin);

// 10
const feedback =
  "This course is simply amazing. This course is simply comprehensive.";

const allOccurences = feedback.replaceAll("course", "program").toUpperCase();

const $sliced = allOccurences.slice(4, 55).split(" ");

console.log("10. ", $sliced);
