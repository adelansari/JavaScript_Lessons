// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.

let small = 2;
let big = 98;
let result = '';

for (small; small <= 98; small += 2, big -= 2) {
  result += `${small} ${big} `;
}

console.log(result);
