// Task01: Define a variable called count with an original value of 0 and then increment it on the following line
// Task02: Define a variable ageLimit that cannot be re-assigned and give it a value of 18.

// Task01
let count = 0;
console.log(`Initial value of count is $ `);
count += 1;
console.log(`Incremented value of count is $ `);

// Task02
const ageLimit = 18;
ageLimit = 5; // gives error: TypeError: Assignment to constant variable.
console.log(ageLimit);
