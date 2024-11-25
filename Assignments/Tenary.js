const schoolScore = [
  { name: "Chinedu Okafor", subject: "Mathematics", score: 85 },
  { name: "Amina Abubakar", subject: "English", score: 92 },
  { name: "Emeka Nwosu", subject: "Science", score: 78 },
  { name: "Folake Adeyemi", subject: "History", score: 88 },
  { name: "Ifeanyi Eze", subject: "Mathematics", score: 95 },
];

// Tenary Questions

const chinedu = schoolScore.find(
  (student) => student.name === "Chinedu Okafor" && student.score > 80
);
console.log(
  chinedu
    ? `${chinedu.name}'s score is A`
    : "No student named Chinedu Okafor with a score above 80 was found."
);

// 2
const amina = schoolScore.find(
  (student) => student.subject === "English" && student.score > 90
);
console.log(
  amina
    ? `${amina.name}'s score is A`
    : "No student studying English with a score above 90 was found."
);

// 3

const emeka = schoolScore.find((student) => student.name === "Emeka Nwosu");
const highScorerr = students.find((student) => student.score > 75);
console.log(
  emeka
    ? `${emeka.name}'s score is A`
    : highScorerr
    ? `${highScorer.name}'s score is above 75`
    : "No student named Emeka Nwosu or with a score above 75 was found."
);

// 4
const historyStudent = schoolScore.find(
  (student) => student.subject === "History" && student.score > 85
);
const highScorer = schoolScore.find((student) => student.score > 90);
console.log(
  historyStudent
    ? `${historyStudent.name}'s score is A`
    : highScorer
    ? `${highScorer.name}'s score is above 90`
    : "No student with a History subject and score above 85 or any student with a score above 90 was found."
);

// 5
const ifeanyi = schoolScore.find((student) => student.name === "Ifeanyi Eze");
const score95 = schoolScore.find((student) => student.score === 95);
console.log(
  ifeanyi
    ? `${ifeanyi.name}'s score is A`
    : score95
    ? `${score95.name}'s score is exactly 95`
    : "No student named Ifeanyi Eze or with a score of exactly 95 was found."
);
