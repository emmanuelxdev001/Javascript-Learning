// Let's create a simple array of objects and then perform each of the higher-order array methods on it.

// ### Array of Objects (Nested)

// ```javascript
// const students = [
//     {
//         name: "Alice",
//         age: 22,
//         scores: { math: 85, english: 92, science: 88 },
//         courses: ["Math", "English", "Science"],
//     },
//     {
//         name: "Bob",
//         age: 24,
//         scores: { math: 78, english: 85, science: 90 },
//         courses: ["Math", "History", "Science"],
//     },
//     {
//         name: "Charlie",
//         age: 23,
//         scores: { math: 92, english: 88, science: 95 },
//         courses: ["Math", "English", "Art"],
//     },
//     {
//         name: "David",
//         age: 25,
//         scores: { math: 95, english: 82, science: 80 },
//         courses: ["Math", "English", "Science", "Art"],
//     },
// ];
// ```

// ### Applying Array Methods

// #### 1. **Map**
// ```javascript
// // Create a new array with just student names and their ages
// const namesAndAges = students.map(student => ({ name: student.name, age: student.age }));
// console.log(namesAndAges);
// ```

// #### 2. **Filter**
// ```javascript
// // Get students who scored more than 90 in science
// const highScienceScores = students.filter(student => student.scores.science > 90);
// console.log(highScienceScores);
// ```

// #### 3. **Reduce**
// ```javascript
// // Calculate the total math scores of all students
// const totalMathScores = students.reduce((total, student) => total + student.scores.math, 0);
// console.log(totalMathScores);
// ```

// #### 4. **ReduceRight**
// ```javascript
// // Create a string of student names in reverse order
// const namesInReverse = students.reduceRight((names, student) => names + student.name + " ", "");
// console.log(namesInReverse);
// ```

// #### 5. **forEach**
// ```javascript
// // Print each student's name and the number of courses they are taking
// students.forEach(student => {
//     console.log(`${student.name} is taking ${student.courses.length} courses.`);
// });
// ```

// #### 6. **Find**
// ```javascript
// // Find the first student who scored exactly 85 in math
// const scored85InMath = students.find(student => student.scores.math === 85);
// console.log(scored85InMath);
// ```

// #### 7. **FindIndex**
// ```javascript
// // Find the index of the first student who is 24 years old
// const indexOf24YearsOld = students.findIndex(student => student.age === 24);
// console.log(indexOf24YearsOld);
// ```

// #### 8. **Every**
// ```javascript
// // Check if all students are taking the Math course
// const allTakeMath = students.every(student => student.courses.includes("Math"));
// console.log(allTakeMath);
// ```

// #### 9. **Some**
// ```javascript
// // Check if any student is taking the Art course
// const anyTakeArt = students.some(student => student.courses.includes("Art"));
// console.log(anyTakeArt);
// ```

// #### 10. **Flat**
// ```javascript
// // Flatten an array of arrays of courses
// const allCourses = students.map(student => student.courses);
// const flatCourses = allCourses.flat();
// console.log(flatCourses);
// ```

// #### 11. **FlatMap**
// ```javascript
// // Create an array of all student names, each repeated once per course they're taking
// const namesRepeatedByCourses = students.flatMap(student => Array(student.courses.length).fill(student.name));
// console.log(namesRepeatedByCourses);
// ```

// #### 12. **From**
// ```javascript
// // Create an array from a string of comma-separated names
// const studentNamesString = "Alice,Bob,Charlie,David";
// const namesArray = Array.from(studentNamesString.split(','));
// console.log(namesArray);
// ```

// #### 13. **Of**
// ```javascript
// // Create an array using `Array.of()`
// const newArray = Array.of(1, 2, "three", { name: "Alice" }, [5, 6]);
// console.log(newArray);
// ```

// ### Output:

// - The `map` method returns an array of objects with just the names and ages of the students.
// - The `filter` method returns an array of students who scored more than 90 in science.
// - The `reduce` method returns the sum of all students' math scores.
// - The `reduceRight` method returns a string of student names in reverse order.
// - The `forEach` method logs each student's name and the number of courses they are taking.
// - The `find` method returns the first student who scored 85 in math.
// - The `findIndex` method returns the index of the first student who is 24 years old.
// - The `every` method checks if all students are taking the Math course.
// - The `some` method checks if any student is taking the Art course.
// - The `flat` method flattens the array of courses.
// - The `flatMap` method repeats each student's name for the number of courses they are taking.
// - The `from` method converts a string into an array.
// - The `of` method creates an array with mixed data types.
