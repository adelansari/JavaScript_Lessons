// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.
let min = 2;
let max = 98;
let result = '';

for (min; min <= 98; min += 2) {
  if (max == 2) {
    result += `${min}, ${max}`;
  } else {
    result += `${min}, ${max}, `;
    max -= 2;
  }
}

console.log(result);
