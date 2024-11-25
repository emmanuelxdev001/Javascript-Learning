const students = [
  {
    studentName: "Alice",
    studentHasSubmitted: true,
    submittedSubject: "Math",
    studentMembership: "gold",
  },
  {
    studentName: "Bob",
    studentHasSubmitted: false,
    submittedSubject: "English",
    studentMembership: "silver",
  },
  {
    studentName: "Charlie",
    studentHasSubmitted: true,
    submittedSubject: "Science",
    studentMembership: "platinum",
  },
  {
    studentName: "David",
    studentHasSubmitted: false,
    submittedSubject: "History",
    studentMembership: "none",
  },
  {
    studentName: "Eve",
    studentHasSubmitted: true,
    submittedSubject: "Math",
    studentMembership: "bronze",
  },
  {
    studentName: "Frank",
    studentHasSubmitted: true,
    submittedSubject: "English",
    studentMembership: "silver",
  },
  {
    studentName: "Grace",
    studentHasSubmitted: false,
    submittedSubject: "Science",
    studentMembership: "gold",
  },
  {
    studentName: "Heidi",
    studentHasSubmitted: true,
    submittedSubject: "History",
    studentMembership: "gold",
  },
  {
    studentName: "Ivan",
    studentHasSubmitted: false,
    submittedSubject: "Math",
    studentMembership: "bronze",
  },
  {
    studentName: "Judy",
    studentHasSubmitted: true,
    submittedSubject: "Science",
    studentMembership: "platinum",
  },
];

// 1
if (
  students.find((student) => student.studentName === "Alice")
    .studentHasSubmitted
) {
  console.log("Alice has submitted her assignment");
} else {
  console.log("Alice has not submitted her assignment");
}

// 2
if (
  students.find((student) => student.studentName === "Bob")
    .studentMembership === "gold" ||
  students.find((student) => student.studentName === "Bob")
    .studentMembership === "platinum"
) {
  console.log("Bob has Priority Grading");
} else {
  console.log("Bob has Standard Grading");
}

// 3
let charlie = students.find((student) => student.studentName === "Charlie");
if (charlie.submittedSubject === "Math") {
  console.log("Charlie is a Math Genius");
} else if (charlie.submittedSubject === "Science") {
  console.log("Charlie is a Science Star");
} else {
  console.log("Charlie, Keep Up the Good Work");
}

// 4
let david = students.find((student) => student.studentName === "David");
if (!david.studentHasSubmitted) {
  if (david.studentMembership === "gold") {
    david.studentMembership = "silver";
  } else if (david.studentMembership === "silver") {
    david.studentMembership = "bronze";
  } else if (david.studentMembership === "bronze") {
    david.studentMembership = "none";
  }
  console.log("David's Membership downgraded");
} else {
  console.log("David has no penalty");
}

// 5
let eve = students.find((student) => student.studentName === "Eve");
if (
  eve.submittedSubject === "Math" &&
  (eve.studentMembership === "gold" || eve.studentMembership === "platinum")
) {
  console.log("Eve is awarded extra credit");
} else {
  console.log("Eve gets no extra credit");
}

// 6
let frank = students.find((student) => student.studentName === "Frank");
if (
  frank.submittedSubject === "Science" &&
  (frank.studentMembership === "silver" ||
    frank.studentMembership === "gold" ||
    frank.studentMembership === "platinum")
) {
  console.log("Frank is eligible for the Science Fair");
} else {
  console.log("Frank is not eligible for the Science Fair");
}

// 7
let grace = students.find((student) => student.studentName === "Grace");
if (grace.studentHasSubmitted) {
  if (grace.studentMembership === "gold") {
    console.log("Grace receives a Gold Badge");
  } else if (grace.studentMembership === "platinum") {
    console.log("Grace receives a Platinum Badge");
  } else if (grace.studentMembership === "silver") {
    console.log("Grace receives a Silver Badge");
  } else {
    console.log("Grace receives a Bronze Badge");
  }
} else {
  console.log("Grace receives no badge");
}

// 8
let heidi = students.find((student) => student.studentName === "Heidi");
if (
  heidi.submittedSubject === "History" &&
  (heidi.studentMembership === "gold" || heidi.studentMembership === "platinum")
) {
  console.log("Heidi receives a detailed feedback report");
} else {
  console.log("Heidi receives standard feedback");
}

// 9
let ivan = students.find((student) => student.studentName === "Ivan");
if (ivan.studentMembership === "bronze" && ivan.studentHasSubmitted) {
  ivan.studentMembership = "silver";
  console.log("Ivan's Membership upgraded to silver");
} else {
  console.log("Ivan's Membership not upgraded");
}

// 10
let judy = students.find((student) => student.studentName === "Judy");
if (
  (judy.submittedSubject === "Science" || judy.submittedSubject === "Math") &&
  (judy.studentMembership === "silver" ||
    judy.studentMembership === "gold" ||
    judy.studentMembership === "platinum")
) {
  console.log("Judy receives the STEM Excellence certificate");
} else {
  console.log("Judy does not receive the STEM Excellence certificate");
}
