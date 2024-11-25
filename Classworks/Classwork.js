// Print out the initials for FullName on the console.
// Answer should be PJ
// It should be dynamic and work even when i change the name
const FullName = "Prince John";

const initials =
  FullName.charAt(0) + FullName.charAt(FullName.indexOf(" ") + 1);

console.log(initials);
