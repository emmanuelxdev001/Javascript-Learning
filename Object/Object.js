let person = {
  name: "Dwayne",
  age: 75,
  complexion: "dark",
  isMale: true,
  isAlive: true,
  isDating: undefined,
  height: "200cm",
};
// Dot Notation
console.log(
  person.name,
  person.age,
  person.complexion,
  person.isMale,
  person.isAlive,
  person.isDating,
  person.height
);

const school = {
  schoolName: "Codelab",
  totalClasses: 30,
  teachersLanguage: "English",
  majorSubject: "Mathematics",
  $totalStudents: 400,
  revenue: "₦4,000,000",
  _mamaPutFood: "jollof-rice",
  haveGreatTutuors: true,
};

// Bracket Notation
console.log(school["schoolName"]);
console.log(school["totalClasses"]);
console.log(school["teachersLanguage"]);
console.log(school["majorSubject"]);
console.log(school["$totalStudents"]);
console.log(school["revenue"]);
console.log(school["_mamaPutFood"]);
console.log(school["$totalStudents"]);

// Nested Objects
let compound = {
  landlord: "Baba Ibeji",
  landlordWife: "Mama Ibeji",
  children: 15,

  tenantOne: {
    name: "Oga longinus",
    wifeName: "mama longinus",
    tenantOneChildren: 8,
  },

  tenantTwo: {
    name: "Oga pascal",
    wifeName: "mama pascal",
    t2Children: 4,
    firstChild: {
      babymamas: 15,
    },
  },
};

console.log(
  compound.landlord,
  compound.children,
  compound.tenantOne.name,
  compound.tenantTwo.t2Children,
  compound.tenantTwo.firstChild.babymamas
);

console.log(compound["tenantTwo"]["firstChild"]["babymamas"]);

console.clear();
