/**
Refine the capitalize function to ensure it capitalizes the first letter of the name parameter provided to it.
 */

function capitalize(word) {
  let wordLowerCase = word.toLowerCase().slice(1);
  let firstLetter = word[0].toUpperCase();
  return firstLetter + wordLowerCase;
}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"
