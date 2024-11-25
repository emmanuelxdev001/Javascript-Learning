const students = [
  {
    name: "Alice",
    age: 22,
    scores: { math: 85, english: 92, science: 88 },
    courses: ["Math", "English", "Science"],
  },
  {
    name: "Bob",
    age: 24,
    scores: { math: 78, english: 85, science: 90 },
    courses: ["Math", "History", "Science"],
  },
  {
    name: "Charlie",
    age: 23,
    scores: { math: 92, english: 88, science: 95 },
    courses: ["Math", "English", "Art"],
  },
  {
    name: "David",
    age: 25,
    scores: { math: 95, english: 82, science: 80 },
    courses: ["Math", "English", "Science", "Art"],
  },
];

// For duplicating Iteratable Datatypes like Arrays and Objects

const duplicatedArr = [...students];

// console.log(duplicatedArr);

// To Merge Scores in Iteratable Datatypes like Arrays and Objects

const mergeAllScores = {
  ...duplicatedArr[0].scores,
  ...duplicatedArr[1].scores,
};

const aliceScore = { ...duplicatedArr[0].scores };

const bobScore = { ...duplicatedArr[1].scores };

const getScores = [aliceScore, bobScore];
const getALL = getScores
  .map((el) => Object.values(el))
  .flat(2)
  .reduce((a, b) => a + b);
console.clear();

// console.log("Checking Scores", getALL);

// To Add to the Array
const newStudent = {
  name: "Kenny",
  age: 29,
  scores: { math: 62, english: 45, science: 48 },
  courses: ["Math", "English", "Science"],
};

const updatedStudents = [...duplicatedArr, newStudent];

// console.log(updatedStudents);

// To Edit or Update
const editCharlie = duplicatedArr.map((students) => {
  const checkCharlie = students.name === "Charlie";
  const runUpdate = checkCharlie
    ? { ...students, courses: [...students.courses, "Physics"] }
    : students;

  return runUpdate;
});

console.log(duplicatedArr);

// Delete
const deleteArtFromDavid = duplicatedArr.map((props) => {
  const check = props.name === "David";
  const final = check ? { ...props, courses: [...props.courses.pop()] } : props;

  return final;
});

console.log(duplicatedArr);
