/**
Refine the capitalize function to ensure it capitalizes the first letter of the name parameter provided to it.
 */

function capitalize(word) {
  return word[0].toUpperCase() + word.toLowerCase().slice(1);
}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"
