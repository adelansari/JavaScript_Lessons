/**
Refine the skipFirstCharacter function to return a string containing all characters from the text parameter, excluding the first character.

 */
function skipFirstCharacter(text) {
  return text.slice(1);
}

// Sample usage - do not modify
console.log(skipFirstCharacter("Xcode")); // "code"
console.log(skipFirstCharacter("Hello")); // "ello"
