/*
- Create a variable named age and assign it an integer value.
- Create a variable named name and assign it a string value.
- Create a variable named isStudent and assign it a boolean value.
- Create a variable named hobbies and assign it an array containing a few string values (e.g., hobbies).
- Create an info object with two properties: schoolName (a string) and grade (an integer).
- Use console.log() to print each variable to the console.
- Use the typeof operator to check the data type of each variable and print the result using console.log(). 
*/

const age = 29;
const name = "Adel";
const isStudent = true;
const hobbies = ["drawing", "sport", "coding", "gaming"];
const studentInfo = { schoolName: "Business College Helsinki", grade: 5 };

console.log("Age is: ", age);
console.log("The type of 'age' is", typeof age);
console.log("Name is: ", name);
console.log("The type of 'name' is", typeof name);
console.log("Is a student: ", isStudent);
console.log("The type of 'isStudent' is", typeof isStudent);
console.log("Hobbies: ", hobbies);
console.log("The type of 'hobbies' is", typeof hobbies);
console.log(
  `Student Info: School Name is ${studentInfo.schoolName}, Grade is ${studentInfo.grade}`
);
console.log("The type of 'studentInfo' is", typeof studentInfo);
